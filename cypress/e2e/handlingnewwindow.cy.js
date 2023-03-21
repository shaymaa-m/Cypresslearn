/// <reference types = "cypress"/>

describe('Handling elements outside website', () => {
    it('Dealing with new window using stub', () => {
        cy.visit("https://demoqa.com/browser-windows");
        cy.window().then((win) => {
            cy.stub(win,'open', url => {
                win.location.href='https://demoqa.com/sample';
            }).as("win")
            cy.get('#windowButton').click()
            cy.get('@win').should("be.called")
            cy.get('h1').should('have.text', 'This is a sample page')

        })
    })
})
