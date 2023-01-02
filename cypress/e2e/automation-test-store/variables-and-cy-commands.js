describe("Verifying variables, cypress commands and jQuery commands", () => {
    
    //Example of storing a variable. I had to do a lot of gymnastics (wrap) because url doesn't have a text property  
    beforeEach(() => {
        
        cy.visit("https://www.automationteststore.com/")
        cy.url().then(url=>{
            cy.wrap(url).as('currentUrl')
        })
        cy.get('@currentUrl').then(reread=>{
            cy.log(reread)
        })
       
    })
    it("Navigation to specific product pages", () => {
        cy.visit("https://www.automationteststore.com/")
        
        cy.xpath("//section[@id='categorymenu']/nav[@class='subnav']//a[contains(text(), 'Makeup')]").click()
        cy.get("h1 .maintext").then(($headerText)=>{
            cy.log("Found: " + $headerText.text())
        })

        cy.get('@currentUrl').then(reread=>{
            cy.log(reread)
        })
        
   
    });
    it.only("Validation of contact page and doing some nested closures", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact ")
        
        //Chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:')

        //JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text=>{
            const firstNameText = text.find("#field_11").text()
            expect(firstNameText).to.contain('First name:')
            //Embedded commands
            cy.get("#field_11").then(fnText=>{
                cy.log(fnText.text())
            })
        })
 
    });

})