/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Alias and invoke", () => {

    const productCategory = "Hair Care"
     it.only("Validate hair care product", () => {
         cy.visit("https://www.automationteststore.com/")
         cy.get("a[href*='product/category&path=']").contains(productCategory).click()
         cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
         cy.get('@productThumbnail').its('length').should('be.gt', 5)
     });
 })