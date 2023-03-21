/// <reference types = "cypress"/>

describe('how to work with hidden elements', () => {
    it('working with menu hover and capture elements' , ()=> {
        cy.visit ("https://demoqa.com/menu#");
        cy.contains('Sub Sub Item 2')
        .invoke('show')
        .click({force:true})
        .wait(30000)
        })
})
