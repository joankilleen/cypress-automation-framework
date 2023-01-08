/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Alias and invoke", () => {
    const productCategory = "Hair Care"
     it("Validate hair care product", () => {
         cy.visit("https://www.automationteststore.com/")
         cy.get("a[href*='product/category&path=']").contains(productCategory).click()
         cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
         cy.get('@productThumbnail').its('length').should('be.gt', 5)
         cy.get('@productThumbnail').should('be.eq', 'Seaweed Conditioner')
     })

     it("Challenge - verify products with thumbnails on home page", function(){
        cy.visit("https://www.automationteststore.com/")
        cy.get('.thumbnail').as('thumbnail').should('have.length', 16)
        cy.get('@thumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart').and('have.length', 11)
     })
     it.only("Calculate total of normal and sale products", function(){
        var itemsTotal = 0
        var saleItemsTotal = 0
        var nonSaleItemsTotal = 0
        cy.visit("https://www.automationteststore.com/")
        cy.get('.thumbnail').as('productThumbnail')

        //Non-sale items
        cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
                    var price = $el.text().replace('$', '').replace(',', '')
                    cy.log(price)
                    nonSaleItemsTotal += Number(price)
                    cy.log("nonSaleItemsTotal " + nonSaleItemsTotal)                                 
        }).then(()=>{
            itemsTotal += nonSaleItemsTotal
            cy.log("nonSaleItemsTotal " + itemsTotal)       
        })

        //Sale items
        cy.get('@productThumbnail').find('.pricenew').each(($el, index, $list) => {
            var price = $el.text().replace('$', '').replace(',', '')
            cy.log(price)
            saleItemsTotal += Number(price)
        }).then(()=>{
            itemsTotal += saleItemsTotal
            cy.log("Final itemsTotal " + itemsTotal)      
            expect(itemsTotal).to.equal(625.6) 
        })
       
     })
 })
 

