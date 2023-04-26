export default class ErpnextSubscriber {
  constructor({
    updateStrapiService,
    productVariantService,
    productService,
    eventBusService,
    updateErpnextService,
  }) {
    this.productVariantService = productVariantService
    this.productService = productService
    this.strapiService = updateStrapiService
    this.eventBus = eventBusService
    this.erpnextService = updateErpnextService

    console.log("hello Erpnext")

    console.warn("\n Strapi Subscriber Initialized")

    this.eventBus.subscribe("region.created", async (data) => {
      console.log(data, "region created")
      await this.updateErpnextService.createRegionInErpnext(data)
    })

    this.eventBus.subscribe("region.updated", async (data) => {
      console.log(data, "region updated")
      await this.updateErpnextService.updateRegionInErpnext(data)
    })

    this.eventBus.subscribe("product-variant.created", async (data) => {
      console.log(data, "product-variant created")
      await this.updateErpnextService.createProductVariantInErpnext(data)
    })

    this.eventBus.subscribe("product-variant.updated", async (data) => {
      console.log(data, "product-variant updated")
      await this.updateErpnextService.updateProductVariantInErpnext(data)
    })

    this.eventBus.subscribe("product.updated", async (data) => {
      console.log(data, "product updated")
      await this.updateErpnextService.updateProductInErpnext(data)
    })

    this.eventBus.subscribe("product.created", async (id) => {
      console.log(id, "product created")
      await this.updateErpnextService.createProductInErpnext(id)
    })

    this.eventBus.subscribe("product.deleted", async (data) => {
      console.log(data, "product deleted")
      await this.updateErpnextService.deleteProductInErpnext(data)
    })

    this.eventBus.subscribe("product-variant.deleted", async (data) => {
      console.log(data, "variant")
      await this.updateErpnextService.deleteProductVariantInErpnext(data)
    })

    // // Blocker - Delete Region API
    this.eventBus.subscribe("region.deleted", async (data) => {
      console.log(data, "region deleted")
      await this.updateErpnextService.deleteRegionInErpnext(data)
    })
  }
}
