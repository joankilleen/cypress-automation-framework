describe("Handle Js Alerts", ()=>{
    it("Validate JS Alerts", ()=>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get("#button1").click()
        cy.on('window:alert', (str)=>{
            expect(str).to.equal("I am an alert box!")
        })

    })
    it("Validate JS confirm alert box with ok", ()=>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get("#button4").click()
        cy.on('window:confirm', (str)=>{
           return true
        })
        cy.get("#confirm-alert-text").contains("OK!")
    })
    //This test works fine
    it("Validate JS confirm alert box with cancel", ()=>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get("#button4").click()
        cy.on('window:confirm', (str)=>{
           return false
        })
        cy.get("#confirm-alert-text").contains("Cancel")
    })

    //The test will work like this but I can't check the text inside the Confirm Box "Press a button"
    //So this is only a partial test
    it("Validate alert box using stubs", ()=>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        const stub = cy.stub()
        cy.get("#button4").click()
        cy.on('window:confirm', stub.returns(false)).then(()=>{
            cy.get("#confirm-alert-text").contains("Cancel")    
        })       
    })

     
}) 