///<reference types='cypress'/>

Cypress.on('uncaught:exception', (err, runnable) => {
    // return false to prevent Cypress from failing the test
    return false
  })

describe('trying to implement the stuff learned', () => {
    
    it('working with basic elements with locators', () => {
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")
        cy.get('#idExample').contains('Click this button using "ID"');
        cy.get('.buttonClass').contains('Button');
        cy.get('button[name="button1"]').contains('Button');
        cy.get('[type="radio"][value="male"]').check();
        cy.get('select').eq(0).select("audi");
    })
   it('working with hidden elements i.e submenu', () => {
    cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")
    cy.get('.sub-menu').contains('Contact Us')
    .invoke('show')
    .click({force:true})
    })
    it('working with windows or origin', () => {
        cy.visit("https://ultimateqa.com/button-success")
        cy.get('.entry-content > .swp_social_panel > .swp_facebook > .nc_tweet')
        .invoke('removeAttr', 'target')
        .click()
        .wait(1000)
        // trying out origin method //
        cy.origin('https://www.facebook.com/share.php',()=> {
        cy.url().should('contain', 'share.php')
        cy.get('.signup_box_content > ._42ft').contains('Sign Up')
           })
          })  
       })
    it.only('working with iframes', () => {
        cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame')
        cy.frameLoaded('.lazyloaded[name="globalSqa"]')//loads five frames still not locating iframe with given id tried class but same error
        cy.wait(5000)
        cy.iframe('.lazyloaded[name="globalSqa"]').find('#mobile_menu_toggler').click()
        cy.iframe('.lazyloaded[name="globalSqa"]').find('#mobile_menu').contains('CheatSheets').click()
    })
