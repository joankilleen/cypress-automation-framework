/// <reference types="Cypress" />

describe("Test Contact Us Form via Automation Test Store", () =>{
    it("Should be able to open succcessfullly contact us form", ()=>{
       cy.visit("https://www.automationteststore.com/")
       cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
       cy.get('#ContactUsFrm_first_name').type("Joan")
       cy.get('#ContactUsFrm_email').type("joan.test@test.ch")
       cy.get('#ContactUsFrm_enquiry').type("My test enquiry")
       cy.get('[title="Submit"]').click()

       cy.url().should('contains', 'success')


    });
    
})
