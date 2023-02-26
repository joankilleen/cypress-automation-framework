// <reference types="Cypress" />

describe("Handling drop-down and selecting options", () =>{
    it("Should be able to select a menu option and verify selection", ()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.get('#dropdowm-menu-1').as('menu-1').select('python')
        cy.get('#dropdowm-menu-2').as('menu-2').select('maven')
        cy.get('#dropdowm-menu-3').as('menu-3').select('JQuery')
        cy.get('@menu-1').should('have.value', 'python')
        cy.get('@menu-1').should('not.have.value', 'java')
        cy.get('@menu-2').should('have.value', 'maven')
    });    
})

