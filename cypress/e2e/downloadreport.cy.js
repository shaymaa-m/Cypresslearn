///<reference types="cypress" />
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'
describe('Reports Download', () => {
    it('CIALFO - College Applications, Made Easy', () => {
      cy.viewport(1440, 900);
      cy.visit('https://companion-test.cialfo.sg/app/auth/signin?token=Zx2EE58K0tyzL8V4Xh7GLYYhQzHcz7Q05jrRXAcfw1&host_subdomain=companion-test');
      cy.xpath("//input[@placeholder='Enter your email or phone number']").type('shaymaa@cialfo.com.sg');
      cy.xpath("//input[@placeholder='Password']").type('12345678');
      cy.xpath("//app-button-primary[@type='submit']").click();
      cy.wait(5000)
      //find Reports Element and click
      cy.get(".sb-open-show").contains('Reports').click();
      cy.wait(5000);
      cy.frameLoaded('#page-iframe')
      cy.iframe('#page-iframe').find('.ng-binding').contains('Outcomes');
      //cy.iframe('#page-iframe').find('.ng-binding').contains('Downloads').click();
      })
    })
