///<reference types='cypress'/>

Cypress.on('uncaught:exception', (err, runnable) => {
    // return false to prevent Cypress from failing the test
    return false
  })
describe('mouse actions', () => {

    it('Mouse double click and see the message' , () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.get('button')
        .contains('Double-Click Me To See Alert')
        .dblclick()
        .wait(2000)
        cy.on('window:alert', (text) => {
              expect(text)
                .to.equal("You double clicked me.. Thank You..")
          })
              
    })

    it('Right click capture' , () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.get('.context-menu-one')
        .contains('right click me')
        .rightclick()
        .wait(1000)
        cy.get('.context-menu-icon-quit > span').click()
        
    })

    it('Scroll to the contact Info' , () => {
        cy.visit('https://www.globalsqa.com/')
        cy.get('#footer').contains('Contact Info')
        .scrollIntoView()
        .should('be.visible')
        })
    it('mousehover visibility ', () => {
        cy.visit("https://www.globalsqa.com/")
        cy.get('#menu-item-7128').should('be.visible')
        .trigger('mouseover')
        .click()
        .wait(30000)

        cy.get('#menu-item-7130')
        .contains('Free Deep Learning eBooks').click()

    })
    it('Drag item and drop it using mouse action' , () => {
        cy.visit("https://www.globalsqa.com/demo-site/draganddrop/")
        cy.get('.resp-tabs-list ').contains('Accepted Elements').click()
        cy.wait(3000)
        cy.frameLoaded('.resp-tab-content-active iframe')
        cy.iframe('.resp-tab-content-active iframe')
        .find('#draggable')
        .contains('Drag me to my target')
        //.move('#droppable', {force: true})
        .trigger('mousedown', { which: 1, pageX: 100, pageY: 100 })
        .trigger('mousemove', { which: 1, pageX: 250, pageY: 100 })
        .trigger('mouseup')
        .wait(2000)
        
    })
  
})
