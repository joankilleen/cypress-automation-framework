/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Alias and invoke", () => {

    const productCategory = "Hair Care"
     it("Validate hair care product", () => {
         cy.visit("https://www.automationteststore.com/")
         cy.get("a[href*='product/category&path=']").contains(productCategory).click()
         cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
         cy.get('@productThumbnail').its('length').should('be.gt', 5)
         cy.get('@productThumbnail').should('be.eq', 'Seaweed Conditioner')
     });

     it.only("Challenge - verify products with thumbnails on home page", function(){
        cy.visit("https://www.automationteststore.com/")
        cy.get('.thumbnail').as('thumbnail').should('have.length', 16)
        cy.get('@thumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')

     })
 })