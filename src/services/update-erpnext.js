import { BaseService } from "medusa-interfaces"
import axios from "axios"

const IGNORE_THRESHOLD = 3 // seconds

export default class UpdateErpnextService extends BaseService {
  constructor(
    {
      regionService,
      productService,
      redisClient,
      productVariantService,
      eventBusService,
    },
    options
  ) {
    super()

    this.productService = productService
    this.productVariantService = productVariantService
    this.regionService = regionService
    this.eventBus = eventBusService
    this.options = options
    this.protocol = this.options.strapi_protocol

    this.strapiAuthToken = ""

    this.checkErpnextHealth().then((res) => {
      if (res) {
        this.loginToErpnext()
      }
    })

    this.redis_ = redisClient
  }

  async addIgnore_(id, side) {
    const key = `${id}_ignore_${side}`
    return await this.redis_.set(
      key,
      1,
      "EX",
      this.options_.ignore_threshold || IGNORE_THRESHOLD
    )
  }

  async shouldIgnore_(id, side) {
    const key = `${id}_ignore_${side}`
    return await this.redis_.get(key)
  }

  async getVariantEntries_(variants) {
    // eslint-disable-next-line no-useless-catch
    try {
      const allVariants = variants.map(async (variant) => {
        // update product variant in strapi
        const result = await this.updateProductVariantInErpnext(variant)
        return result.productVariant
      })
      return Promise.all(allVariants)
    } catch (error) {
      throw error
    }
  }

  async createImageAssets(product) {
    const assets = await Promise.all(
      product.images
        .filter((image) => image.url !== product.thumbnail)
        .map(async (image, i) => {
          const result = await this.createEntryInErpnext("images", product.id, {
            image_id: image.id,
            url: image.url,
            metadata: image.metadata || {},
          })
          return result.image
        })
    )
    return assets || []
  }

  getCustomField(field, type) {
    const customOptions = this.options_[`custom_${type}_fields`]

    if (customOptions) {
      return customOptions[field] || field
    } else {
      return field
    }
  }

  async createProductInErpnext(productId) {
    const hasType = await this.getType("products")
      .then(() => true)
      .catch((err) => {
        // console.log(err)
        return false
      })
    if (!hasType) {
      return Promise.resolve()
    }

    // eslint-disable-next-line no-useless-catch
    try {
      const product = await this.productService_.retrieve(productId, {
        relations: [
          "options",
          "variants",
          "variants.prices",
          "variants.options",
          "type",
          "collection",
          "tags",
          "images",
        ],
        select: [
          "id",
          "title",
          "subtitle",
          "description",
          "handle",
          "is_giftcard",
          "discountable",
          "thumbnail",
          "weight",
          "length",
          "height",
          "width",
          "hs_code",
          "origin_country",
          "mid_code",
          "material",
          "metadata",
        ],
      })

      console.log("product created", product)

      // if (product) {
      //   return await this.createEntryInStrapi("products", productId, product)
      // }
    } catch (error) {
      throw error
    }
  }

  async createProductVariantErpnext(variantId) {
    const hasType = await this.getType("product-variants")
      .then(() => true)
      .catch(() => false)

    if (!hasType) {
      return Promise.resolve()
    }

    // eslint-disable-next-line no-useless-catch
    try {
      const variant = await this.productVariantService_.retrieve(variantId, {
        relations: ["prices", "options", "product"],
      })

      // console.log(variant)
      if (variant) {
        return await this.createEntryInErpnext(
          "product-variants",
          variantId,
          variant
        )
      }
    } catch (error) {
      throw error
    }
  }

  async createRegionInErpnext(regionId) {
    const hasType = await this.getType("regions")
      .then(() => true)
      .catch(() => false)
    if (!hasType) {
      console.log('Type "Regions" doesnt exist in Strapi')
      return Promise.resolve()
    }

    // eslint-disable-next-line no-useless-catch
    try {
      const region = await this.regionService_.retrieve(regionId, {
        relations: [
          "countries",
          "payment_providers",
          "fulfillment_providers",
          "currency",
        ],
        select: ["id", "name", "tax_rate", "tax_code", "metadata"],
      })

      console.log(region, "region created")

      return await this.createEntryInErpnext("regions", regionId, region)
    } catch (error) {
      throw error
    }
  }

  async updateRegionInErpnext(data) {
    const hasType = await this.getType("regions")
      .then((res) => {
        // console.log(res.data)
        return true
      })
      .catch((error) => {
        // console.log(error.response.status)
        return false
      })
    if (!hasType) {
      return Promise.resolve()
    }

    const updateFields = [
      "name",
      "currency_code",
      "countries",
      "payment_providers",
      "fulfillment_providers",
    ]

    // check if update contains any fields in Strapi to minimize runs
    const found = data.fields.find((f) => updateFields.includes(f))
    if (!found) {
      return
    }

    // eslint-disable-next-line no-useless-catch
    try {
      const ignore = await this.shouldIgnore_(data.id, "strapi")
      if (ignore) {
        return
      }

      const region = await this.regionService_.retrieve(data.id, {
        relations: [
          "countries",
          "payment_providers",
          "fulfillment_providers",
          "currency",
        ],
        select: ["id", "name", "tax_rate", "tax_code", "metadata"],
      })
      // console.log(region)

      if (region) {
        // Update entry in Strapi
        const response = await this.updateEntryInErpnext(
          "regions",
          region.id,
          region
        )
        console.log("Region Strapi Id - ", response)
      }

      return region
    } catch (error) {
      throw error
    }
  }

  async updateProductInErpnext(data) {
    const hasType = await this.getType("products")
      .then((res) => {
        // console.log(res.data)
        return true
      })
      .catch((error) => {
        // console.log(error.response.status)
        return false
      })
    if (!hasType) {
      return Promise.resolve()
    }

    // console.log(data)
    const updateFields = [
      "variants",
      "options",
      "tags",
      "title",
      "subtitle",
      "tags",
      "type",
      "type_id",
      "collection",
      "collection_id",
      "thumbnail",
    ]

    // check if update contains any fields in Strapi to minimize runs
    const found = data.fields.find((f) => updateFields.includes(f))
    if (!found) {
      return Promise.resolve()
    }

    // eslint-disable-next-line no-useless-catch
    try {
      const ignore = await this.shouldIgnore_(data.id, "strapi")
      if (ignore) {
        console.log(
          "Strapi has just updated this product which triggered this function. IGNORING... "
        )
        return Promise.resolve()
      }

      const product = await this.productService_.retrieve(data.id, {
        relations: [
          "options",
          "variants",
          "variants.prices",
          "variants.options",
          "type",
          "collection",
          "tags",
          "images",
        ],
        select: [
          "id",
          "title",
          "subtitle",
          "description",
          "handle",
          "is_giftcard",
          "discountable",
          "thumbnail",
          "weight",
          "length",
          "height",
          "width",
          "hs_code",
          "origin_country",
          "mid_code",
          "material",
          "metadata",
        ],
      })

      if (product) {
        await this.updateEntryInErpnext("products", product.id, product)
      }

      return product
    } catch (error) {
      throw error
    }
  }

  async updateProductVariantInErpnext(data) {
    const hasType = await this.getType("product-variants")
      .then((res) => {
        // console.log(res.data)
        return true
      })
      .catch((error) => {
        // console.log(error.response.status)
        return false
      })
    if (!hasType) {
      return Promise.resolve()
    }

    const updateFields = [
      "title",
      "prices",
      "sku",
      "material",
      "weight",
      "length",
      "height",
      "origin_country",
      "options",
    ]

    // Update came directly from product variant service so only act on a couple
    // of fields. When the update comes from the product we want to ensure
    // references are set up correctly so we run through everything.
    if (data.fields) {
      const found = data.fields.find((f) => updateFields.includes(f))
      if (!found) {
        return Promise.resolve()
      }
    }

    try {
      const ignore = await this.shouldIgnore_(data.id, "strapi")
      if (ignore) {
        return Promise.resolve()
      }

      const variant = await this.productVariantService_.retrieve(data.id, {
        relations: ["prices", "options"],
      })
      console.log(variant, "variants")

      if (variant) {
        // Update entry in Strapi
        const response = await this.updateEntryInErpnext(
          "product-variants",
          variant.id,
          variant
        )
        console.log("Variant Strapi Id - ", response)
      }

      return variant
    } catch (error) {
      console.log("Failed to update product variant", data.id)
      throw error
    }
  }

  async deleteProductInErpnext(data) {
    const hasType = await this.getType("products")
    console
      .log(data, "delete product")
      .then(() => true)
      .catch((err) => {
        console.log(err)
        return false
      })
    if (!hasType) {
      return Promise.resolve()
    }

    const ignore = await this.shouldIgnore(data.id, "strapi")
    if (ignore) {
      return Promise.resolve()
    }

    return await this.deleteEntryInErpnext("products", data.id)
  }

  async deleteProductVariantInErpnext(data) {
    const hasType = await this.getType("product-variants")
      .then(() => true)
      .catch((err) => {
        // console.log(err)
        return false
      })
    if (!hasType) {
      return Promise.resolve()
    }

    const ignore = await this.shouldIgnore_(data.id, "strapi")
    if (ignore) {
      return Promise.resolve()
    }

    return await this.deleteEntryInErpnext("product-variants", data.id)
  }

  // Blocker - Delete Region API
  async deleteRegionInErpnext(data) {}

  async getType(type) {
    if (!this.strapiAuthToken) {
      await this.loginToErpnext()
    }
    const config = {
      url: `${this.strapi_URL_STRING}/api/${type}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${this.strapiAuthToken}`,
      },
    }

    return axios(config)
  }

  async checkErpnextHealth() {
    const config = {
      method: "head",
      url: `${this.strapi_URL_STRING}/_health`,
    }
    console.log("Checking strapi Health")
    return axios(config)
      .then((res) => {
        if (res.status === 204) {
          console.log("\n Strapi Health Check OK \n")
        }
        return true
      })
      .catch((error) => {
        if (error.code === "ECONNREFUSED") {
          console.error(
            "\nCould not connect to strapi. Please make sure strapi is running.\n"
          )
        }
        return false
      })
  }

  async loginToErpnext() {
    const config = {
      method: "post",
      url: `${this.strapi_URL_STRING}/api/auth/local`,
      data: {
        identifier: this.options_.strapi_medusa_user,
        password: this.options_.strapi_medusa_password,
      },
    }
    return axios(config)
      .then((res) => {
        if (res.data.jwt) {
          this.strapiAuthToken = res.data.jwt
          console.log("\n Successfully logged in to Strapi \n")
          return true
        }
        return false
      })
      .catch((error) => {
        if (error) {
          throw new Error("\nError while trying to login to strapi\n" + error)
        }
      })
  }

  async createEntryInErpnext(type, id, data) {
    if (!this.strapiAuthToken) {
      await this.loginToErpnext()
    }
    const config = {
      method: "post",
      url: `${this.strapi_URL_STRING}/api/${type}`,
      headers: {
        Authorization: `Bearer ${this.strapiAuthToken}`,
      },
      data,
    }
    return axios(config)
      .then((res) => {
        if (res.data.result) {
          this.addIgnore_(id, "medusa")
          return res.data.data
        }
        return null
      })
      .catch(async (error) => {
        if (error && error.response && error.response.status) {
          throw new Error(
            "Error while trying to create entry in strapi - " + type
          )
        }
      })
  }

  async updateEntryInErpnext(type, id, data) {
    if (!this.strapiAuthToken) {
      await this.loginToErpnext()
    }
    const config = {
      method: "put",
      url: `${this.strapi_URL_STRING}/api/${type}/${id}`,
      headers: {
        Authorization: `Bearer ${this.strapiAuthToken}`,
      },
      data,
    }
    return axios(config)
      .then((res) => {
        if (res.data.result) {
          this.addIgnore_(id, "medusa")
          return res.data.data
        }
        return null
      })
      .catch(async (error) => {
        if (error && error.response && error.response.status) {
          throw new Error("Error while trying to update entry in strapi ")
        }
      })
  }

  async deleteEntryInErpnext(type, id) {
    if (!this.strapiAuthToken) {
      await this.loginToErpnext()
    }
    const config = {
      method: "delete",
      url: `${this.strapi_URL_STRING}/api/${type}/${id}`,
      headers: {
        Authorization: `Bearer ${this.strapiAuthToken}`,
      },
    }
    return axios(config)
      .then((res) => {
        if (res.data.result) {
          return res.data.data
        }
        return null
      })
      .catch(async (error) => {
        if (error && error.response && error.response.status) {
          throw new Error("Error while trying to delete entry in strapi ")
        }
      })
  }

  async doesEntryExistInErpnext(type, id) {
    if (!this.strapiAuthToken) {
      await this.loginToErpnext()
    }
    const config = {
      method: "get",
      url: `${this.strapi_URL_STRING}/api/${type}/${id}`,
      headers: {
        Authorization: `Bearer ${this.strapiAuthToken}`,
      },
    }

    return axios(config)
      .then((res) => {
        return true
      })
      .catch((error) => {
        console.log(error.response.status, id)
        throw new Error("Given entry doesn't exist in Strapi")
      })
  }
}
