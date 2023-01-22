/// <reference types="Cypress" />

describe("Select checkboxes and check state", () =>{
    it("Should be able to check and uncheck checkbox and verify state", ()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.get('input[value="option-1"]').check()
        cy.get('input[value="option-4"]').check()
        cy.get('input[value="option-3"]').as('option-3').should('be.checked')
        cy.get('@option-3').uncheck().should('not.be.checked')

        //Check multiple values
        cy.get('#checkboxes input').as('checkboxes').check(['option-2', 'option-3'])
        cy.get('@checkboxes').uncheck(['option-1', 'option-4'])         
    });    
})

describe("Handling radio buttons and checking their state", ()=>{
    it("Should be  able to check radio button and verify the state", ()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.get('#radio-buttons [value="orange"]').as('orange').click()
        cy.get('@orange').should('be.checked')
    })

    it("Checking disabled state", ()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.get("#radio-buttons-selected-disabled [value='cabbage']").as('cabbage').should('be.disabled')
        cy.get("#radio-buttons-selected-disabled [value='pumpkin']").as('pumpkin').should('not.be.disabled')
    })
})
