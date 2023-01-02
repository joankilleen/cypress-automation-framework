/// <reference types="cypress" />
/// <reference types="cypress-xpath" />


describe("Test Contact Us Form via Automation Test Store using CSS and XPath selectors", () =>{
    it.only("Should be able to open successfully contact us form using CSS selectors only", ()=>{
       cy.visit("https://www.automationteststore.com/")
       
       //Find url that ends with 'contact'
       cy.get('a[href$="contact"]').as("link").then(function($link){
         cy.log("Read the link " + $link.text())
      
       })
       cy.get("@link").click()
       cy.get('[id=ContactUsFrm_first_name]').type("Joan")
       cy.get('[id=ContactUsFrm_email]').type("joan.test@test.ch")
       cy.get('[id=ContactUsFrm_enquiry]').type("My test enquiry")
       cy.get("form[id=ContactUsFrm] button[type='submit']").click()

       cy.url().should('contains', 'success')

    });

    it("Should be able to open successfully contact us form using XPath selectors only", ()=>{
        
      cy.log("Test starts")
      cy.visit("https://www.automationteststore.com/")

        //Find url that ends with 'contact'
        cy.xpath("//a[contains(@href, 'contact')]").click();
        
        cy.xpath("//input[@id='ContactUsFrm_first_name']").type("Joan")
        cy.xpath("//input[@id='ContactUsFrm_email']").type("joan.test@test.ch")
        cy.xpath("//textarea[@id='ContactUsFrm_enquiry']").type("My test enquiry") 
        cy.xpath("/html//form[@id='ContactUsFrm']//button[@type='submit']").click()
       
        //Assertions - more than necessary
        cy.url().should('contains', 'success')
        cy.xpath("//div[@id='maincontainer']//section//p[contains(., 'successfully')]").invoke('text').as('text')
        cy.get('@text').should('contains', 'success') 
        cy.log("Test ends")
 
     });
    
})
