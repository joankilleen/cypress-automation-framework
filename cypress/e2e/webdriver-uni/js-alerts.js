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
    it.only("Validate JS confirm alert box with cancel", ()=>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get("#button4").click()
        cy.on('window:confirm', (str)=>{
           return false
        })
        cy.get("#confirm-alert-text").contains("Cancel")
    })

    //This test doesn't work
    it("Validate alert boy using stubs", ()=>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get("#button4").click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith("Press a button!")
            
        }).then(()=>{
            return false
        }).then(()=>{
            cy.get("#confirm-alert-text").contains("Cancel")
        })
        
        
    })
}) 