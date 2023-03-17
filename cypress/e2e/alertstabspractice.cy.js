///<reference types="cypress" />

describe('dealing with tabs and removing redirection to tabs',() => {
    it ('visit demopage and click tab button' , () => {
        cy.visit ('https://demoqa.com/links');
        cy.get('#simpleLink').invoke('removeAttr','target').click();
        cy.wait(3000);
 })
    it('adding assertion that alerts, frame and window card exists', () => {
        cy.get ('.card-body > h5').contains('Alerts, Frame & Windows');
        cy.url ().should('eq','https://demoqa.com/');
    })
})