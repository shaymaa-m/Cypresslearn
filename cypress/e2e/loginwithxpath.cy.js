describe('login', () => {
    it('first trial login', () => {
        cy.visit('https://companion-test.cialfo.sg/app/auth/signin?token=Zx2EE58K0tyzL8V4Xh7GLYYhQzHcz7Q05jrRXAcfw1&host_subdomain=companion-test');
        cy.xpath("//input[@placeholder='Enter your email or phone number']").type('shaymaa@cialfo.com.sg');
        cy.xpath("//input[@placeholder='Password']").type('12345678');
        cy.xpath("//app-button-primary[@type='submit']").click();
    })
})


describe('login', () => {
    
})