///<reference types="cypress" />
  cy.url = 'https://sandbox.cialfo.sg/v3/sessions?access_token=Zx2EE58K0tyzL8V4Xh7GLYYhQzHcz7Q05jrRXAcfw1&locale=en-US&captcha_token='
 
  cy.sendRequest = (username, password, responseCode) => {
    cy.request({
      method: 'POST',
      failOnStatusCode: false,
      url: cy.url,
      headers: {
        'Content-Type': 'application/json',
        'access_token': 'Zx2EE58K0tyzL8V4Xh7GLYYhQzHcz7Q05jrRXAcfw1',
        'locale': 'eng-US',
        'User-Agent': 'wTRGdmtTaDUzdCDD',
        'platform': 'web'
      },
      body : {
        user:
            {
              email_or_phone: username,
              password: password,
              device_info:
                  { platform: 'web' }
            }
      },
    }).its('status').should('eq', responseCode)
  };
  
  describe('Authentication', () => {
      
    it('Try to Login with wrong password', () => {
      cy.sendRequest("shaymaa@cialfo.com.sg","12345666", 401)
    })
  
    it('Try to Login with wrong email', () => {
        cy.sendRequest("shaymaa22@cialfo.com.sg", "12345678", 401)
        cy.wait(10000)
    })
  
    it('Try to Login with wrong email and password', () => {
        cy.sendRequest("shaymaa21@cialfo.com.sg", "password", 401)
        cy.wait(10000)
    })
    it('Try to Login with valid email and password', () => {
        cy.sendRequest("shaymaa@cialfo.com.sg", "12345678", 200)
        
    })
  
    })