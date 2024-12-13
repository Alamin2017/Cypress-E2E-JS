class ProductLocator{
    all_products_title_text(){
        return cy.xpath("//h2[normalize-space()='All Products']");
    }
}
export default ProductLocator