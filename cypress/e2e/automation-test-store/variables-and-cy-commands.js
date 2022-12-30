/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Verifying variables, cypress commands and jQuery commands", () => {
    
    //Example of storing a variable. I had to do a lot of gymnastics because url doesn't have a text property
    beforeEach(() => {
        
        cy.visit("https://www.automationteststore.com/")
        cy.url().then(url=>{
            cy.wrap(url).as('currentUrl')
        })
        cy.get('@currentUrl').then(reread=>{
            cy.log(reread)
        })
       
    })
    it.only("Navigation to specific product pages", () => {
        cy.visit("https://www.automationteststore.com/")
        
        cy.xpath("//section[@id='categorymenu']/nav[@class='subnav']//a[contains(text(), 'Makeup')]").click()
        cy.get("h1 .maintext").then(($headerText)=>{
            cy.log("Found: " + $headerText.text())
        })

        cy.get('@currentUrl').then(reread=>{

            cy.log(reread)
        })
        
   
    });
   

})