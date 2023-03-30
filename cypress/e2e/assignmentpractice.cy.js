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
        /*cy.window().then((win) => {
            cy.stub(win,'open', url => {
                win.location.href='https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fshare.php%3Fu%3Dhttps%253A%252F%252Fultimateqa.com%252Fbutton-success%252F%253Futm_source%253Dfacebook%2526utm_medium%253DSocial%2526utm_campaign%253DSocialWarfare&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB';
                }).as("win")*/
            cy.wait(5000)
            cy.get('.entry-content > .swp_social_panel > .swp_facebook > .nc_tweet').click()
            //alternate solution was trying out origin method
            cy.origin('https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fshare.php%3Fu%3Dhttps%253A%252F%252Fultimateqa.com%252Fbutton-success%252F%253Futm_source%253Dfacebook%2526utm_medium%253DSocial%2526utm_campaign%253DSocialWarfare&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB',()=> {
            cy.get('h2').should('have.text', 'Facebook')
       })
    })
    it('working with iframes', () => {
        cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame')
        cy.frameLoaded()//loads five frames
        cy.wait(5000)
        cy.iframe('#aswift_0').find('.mobile_menu_toggler').should('be.visible').click()
        //cy.get('.resp-tab-content-active')
        //cy.iframe('.resp-tab-content-active').find('.mobile_menu_toggler').should('be.visible').click()
    })

})
