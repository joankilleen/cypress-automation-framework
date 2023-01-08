/// <reference types="Cypress" />

describe("Cypress web security", () =>{
    it("Validate visiting 2 different domains. This is not allowed", ()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.visit("https://www.automationteststore.com/")
    });

    it.only("Validate visiting 2 different domains by user actions. This is not allowed unless chromeWebSecurity: false in config file", ()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    });

    
})