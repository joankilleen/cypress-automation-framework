/// <reference types="Cypress" />

describe("Test Contact Us Form WebdriverUni", () =>{
    it("Should be able to open succcessfullly contact us form", ()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#contact-us').click({}) 

    });
    it("Should be able to submit succcessfullly on contact us form", ()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Joan")
        cy.get('[name="last_name"]').type("Killeen")
        cy.get('[name="email"]').type("joan@test.ch")
        cy.get('textarea.feedback-input').type("My test comment")
        cy.get('[type="submit"]').click()
       
         
    });
    it("Should not be able to submit succcessfullly on contact us form as required field not present", ()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Killeen")
        cy.get('[name="email"]').type("joan@test.ch")
        cy.get('textarea.feedback-input').type("My test comment")
        cy.get('[type="submit"]').click()
        cy.get('body').then(function(e){
            const t = e.text()
            expect(t).to.contains("Error: all fields are required")
        })

    });
})
