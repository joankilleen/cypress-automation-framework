/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Iterate over elements", () => {

   const productCategory = "Hair Care"
    it("Log information about all hair care products", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains(productCategory).click()
        
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + ": " + $el.text())
         
        })
    });

    it("Select specific product to basket", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains(productCategory).click()
        const searchText = "Curls to straight Shampoo"
        
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if ($el.text()=== searchText){
                cy.wrap($el).click()
            }         
        })
        cy.url().should('contains', 'product_id=74')
        
    });

})