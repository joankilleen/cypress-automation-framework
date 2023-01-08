/// <reference types="Cypress" />

describe("Test Contact Us Form WebdriverUni - testing multiple tabs", () =>{
    

    it("Should not be able to submit succcessfullly on contact us form as required field not present", ()=>{
        cy.visit("http://www.webdriveruniversity.com")
        

        //Remove target blank from <a> tag in the DOM so that the contact us page opens in the same tab
        // removeArrt is jQuery. I think that's why we need invoke.
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        
        cy.get('[name="first_name"]').type("Killeen")
        cy.get('[name="email"]').type("joan@test.ch")
        cy.get("form#contact_form > textarea[name='message']").type("My test comment")
        cy.get('[type="submit"]').click()

        //assert
        cy.xpath('//body').should("include.text","Error: all fields are required")
    });
    it("Should not be able to submit succcessfullly on contact us form as required field not present", ()=>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        
    });

})
