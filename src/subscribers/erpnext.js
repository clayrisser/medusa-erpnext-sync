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
    this.updateErpnextService = updateErpnextService

    console.log("ErpnextSubscriber")

    this.eventBus.subscribe("region.created", async (data) => {
      console.log("region.created", data)
      this.updateErpnextService.createRegionInErpnext(data)
    })

    this.eventBus.subscribe("region.updated", async (data) => {
      console.log("region.updated", data)
      this.updateErpnextService.updateRegionInErpnext(data)
    })

    this.eventBus.subscribe("product-variant.created", async (data) => {
      console.log("product-variant.created", data)
      this.updateErpnextService.createProductVariantInErpnext(data)
    })

    this.eventBus.subscribe("product-variant.updated", async (data) => {
      console.log("product-variant.updated", data)
      this.updateErpnextService.updateProductVariantInErpnext(data)
    })

    this.eventBus.subscribe("product.updated", async (data) => {
      console.log("product.updated", data)
      this.updateErpnextService.updateProductInErpnext(data)
    })

    this.eventBus.subscribe("product.created", async (data) => {
      console.log(data)
      this.updateErpnextService.createProductInErpnext(data)
    })

    this.eventBus.subscribe("product.deleted", async (data) => {
      console.log("product.deleted", data)
      this.updateErpnextService.deleteProductInErpnext(data)
    })

    this.eventBus.subscribe("product-variant.deleted", async (data) => {
      console.log("product-variant.deleted", data)
      this.updateErpnextService.deleteProductVariantInErpnext(data)
    })

    // Blocker - Delete Region API
    this.eventBus.subscribe("region.deleted", async (data) => {
      console.log("region.deleted", data)
      this.updateErpnextService.deleteRegionInErpnext(data)
    })
  }
}
