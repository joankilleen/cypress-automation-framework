/// <reference types="Cypress" />

describe("Test Contact Us Form via Automation Test Store using CSS selectors", () =>{
    it("Should be able to open successfullly contact us form using CSS selectors only", ()=>{
       cy.visit("https://www.automationteststore.com/")
       //Find url that ends with 'content/contact'
       cy.get('a[href$="rt=content/contact"]').click()
       cy.get('[id=ContactUsFrm_first_name]').type("Joan")
       cy.get('#ContactUsFrm_email').type("joan.test@test.ch")
       cy.get('#ContactUsFrm_enquiry').type("My test enquiry")
       cy.get("form#ContactUsFrm button[type='submit']").click()

       cy.url().should('contains', 'success')


    });

    it.only("Should be able to open successfullly contact us form using XPath selectors only", ()=>{
        cy.visit("https://www.automationteststore.com/")
        //Find url that ends with 'content/contact'
        cy.get('a[href$="rt=content/contact"]').click()
        cy.get('[id=ContactUsFrm_first_name]').type("Joan")
        cy.get('#ContactUsFrm_email').type("joan.test@test.ch")
        cy.get('#ContactUsFrm_enquiry').type("My test enquiry")
        cy.get("form#ContactUsFrm button[type='submit']").click()
 
        cy.url().should('contains', 'success')
 
 
     });
    
})
