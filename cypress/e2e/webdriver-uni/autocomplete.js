// <reference types="Cypress" />

describe("Handling autocomplete lists", () =>{
    it("Select specific product", ()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})
        cy.get("#myInput").as('input_box').type('p')
        cy.get("input[value='Pepperoni']").click({force:true})
        cy.get("#submit-button").click()
        cy.url().should('contain', 'Pepperoni')

        cy.get('@input_box').type('g')
        cy.get("#myInputautocomplete-list > *").each(($el, $index, $elist)=>{
            var el_text = $el.text()
            cy.log(el_text)
            expect(el_text).to.contain('G')
            if (el_text === 'Green beans'){
                $el.trigger("click")
            }
        })
        cy.get("#submit-button").click()
        cy.url().should('contain', 'Green')

    });    
})

