/// <reference types = "cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    // return false to prevent Cypress from failing the test
    return false
  })
describe('how to work with hidden elements', () => {
    it('working with menu hover and capture elements' , ()=> {
        cy.visit ("https://demoqa.com/menu#");
        cy.get('.nav-menu-container').contains('Sub Sub Item 2')
        .invoke('show')
        .click({force:true})
        })
})
