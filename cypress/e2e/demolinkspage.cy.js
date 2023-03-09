
///<reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // return false to prevent Cypress from failing the test
    return false
  })

describe('adding all types of selectors', () => {
   

    it('open page link', () => {
        cy.visit('https://demoqa.com/links');
    })
    
    it('get element by id', () => {

        cy.get('#simpleLink').contains('Home').should('be.visible')
    })
    
    it('get element by LinkText', () => {
         
        cy.contains('Forbidden').should('be.visible')
    })

    it('get element by class', () => {
         
        cy.get('.main-header').contains('Links')
    })
})