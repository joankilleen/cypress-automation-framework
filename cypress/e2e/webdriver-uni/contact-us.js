/// <reference types="Cypress" />

describe("Test Contact Us Form WebdriverUni", () =>{
    it("Should be able to open succcessfullly contact us form", ()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#contact-us').click({}) 
        cy.document().should("have.property", "charset").and("eq", "UTF-8")

        //assert
        cy.title().should("include", "WebDriver")
    });

    it("Should be able to submit succcessfullly on contact us form", ()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('input[name="first_name"]').type("Joan")
        cy.get('input[name="last_name"]').type("Killeen")
        cy.get('input[name="email"]').type("joan@test.ch")
        cy.get("form#contact_form > textarea[name='message']").type("My test comment")
        cy.get('[type="submit"]').click()

        //assert
        cy.xpath("//h1").should("include.text", "Thank You")        
    });

    it("Should not be able to submit succcessfullly on contact us form as required field not present", ()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Killeen")
        cy.get('[name="email"]').type("joan@test.ch")
        cy.get("form#contact_form > textarea[name='message']").type("My test comment")
        cy.get('[type="submit"]').click()

        //assert
        cy.xpath('//body').should("include.text","Error: all fields are required")
    });
})
