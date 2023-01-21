it('checks api status successful login', () => {
    cy.request({
        method: 'POST',
        url: 'https://sandbox.cialfo.sg/v3/sessions?access_token=Zx2EE58K0tyzL8V4Xh7GLYYhQzHcz7Q05jrRXAcfw1&locale=en-US&captcha_token=',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: {
            email: 'shaymaa@cialfo.com.sg',
            password: '12345678'
        }
    }).then((response) => {
        expect(response.status).to.eq(400);
    });
});