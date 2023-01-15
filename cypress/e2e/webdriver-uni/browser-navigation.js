describe("Validate webdriveruni homepage links", ()=>{
    it("Confirm links redirect to correct pages", ()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        //Forcing the new page to remain in the same tab
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.reload(true) //reload but not from cache
        cy.go('forward')
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.get('#login-portal ').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Login-Portal')
        cy.go('back')

        //To do list page
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'To-Do-List')
        cy.go('back')

    });
})