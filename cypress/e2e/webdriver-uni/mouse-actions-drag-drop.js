describe("Handling drag drop and other mouse actions", () =>{
    it("Drag and Drop operation", ()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get("#draggable")
           .trigger('mousedown', { which: 1 })
           .trigger('mousemove', { which: 1, pageX: 300, pageY: 300 })
           .trigger('mouseup', { force: true })
        cy.get('#droppable p').then($el=>{
            expect($el).to.have.css('background-color', 'rgb(244, 89, 80)')
        })
    });
    
    it("Another way to drag and drop by selecting the target", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get('#draggable').trigger('mousedown', {which: 1});
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
    });

    it("Double click", ()=>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get('#double-click h2').trigger('dblclick')

        //Expect element to have changed to green
        cy.get('div#double-click').then(($el)=>{
            expect($el).to.have.css('background-color', 'rgb(147, 203, 90)')

        })
        
    


    });
})