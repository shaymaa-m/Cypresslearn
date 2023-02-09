///<reference types="cypress" />
    describe('Reports Download', () => {
    
    it('login successfully', () => {
      //Load URL
      cy.visit('https://companion-test.cialfo.sg/app/auth/signin?token=Zx2EE58K0tyzL8V4Xh7GLYYhQzHcz7Q05jrRXAcfw1&host_subdomain=companion-test');
      //type username
      cy.xpath("//input[@placeholder='Enter your email or phone number']").type('shaymaa@cialfo.com.sg');
      //type password
      cy.xpath("//input[@placeholder='Password']").type('12345678');
      //click sign in
      cy.xpath("//app-button-primary[@type='submit']").click();
      //find Reports Element
      cy.xpath('//*[@title="Reports"]/div/div', 5).should('include.text', 'Reports 0');
      //Click Reports
    })
})
