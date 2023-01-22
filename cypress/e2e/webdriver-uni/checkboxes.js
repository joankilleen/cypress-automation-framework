/// <reference types="Cypress" />

describe("Test Contact Us Form WebdriverUni", () =>{
    it("Should be able to open succcessfullly contact us form", ()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.get('input[value="option-1"]').check()
        cy.get('input[value="option-4"]').check()
        cy.get('input[value="option-3"]').should('be.checked')
        cy.get('input[value="option-3"]').uncheck()

        
        
        
    });

    
})
