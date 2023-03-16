///<reference types="cypress" />

const randomEmail = "shaimatest" + "+" + Math.random().toString(36).substring(7) + "@yopmail.com"
  cy.requestHeader =  {
    'Content-Type': 'application/json',
    'User-Agent': 'wTRGdmtTaDUzdCDD',
    'platform': 'web'
  }
  
  cy.url = 'https://sandbox.cialfo.sg/v3/users/access_student_create?access_token=Zx2EE58K0tyzL8V4Xh7GLYYhQzHcz7Q05jrRXAcfw1&captcha_token='
  
  cy.sendRequest = (email, password,first_name,last_name,gender,mobile,mobile_country_code,has_accepted_conditions, responseCode) => {
    cy.request({
      method: 'POST',
      url: cy.url,
      headers: cy.requestHeader,
      failOnStatusCode: false,
      body : {
        user:
            {
              email: email,
              password: password,
              first_name: first_name,
              last_name: last_name,
              gender: gender,
              mobile: mobile,
              mobile_country_code: mobile_country_code,
              has_accepted_conditions: has_accepted_conditions,
              device_info:
                  { platform: 'web' }
            }
      },
    }).its('status').should('eq', responseCode)
  };

  describe('Create Signup', () => {

    it('Successful signup with all fields included', () => {
      cy.sendRequest(randomEmail, "123123123","Demo","Student78","M","9556 3029","+65","true",200)
      cy.wait(30000)
    })

    it('User forgot to add password', () => {
        cy.sendRequest(randomEmail, "","Demo","Student5209","M","","+65","false",400)
        cy.wait(30000)
      })

    it('User exists with same contact number', () => {
        cy.sendRequest(randomEmail, "123123123","Demo","Student533","M","9556 3017","+65","true",422)
        cy.wait(30000)
      })

    it('User providing invalid number', () => {
        cy.sendRequest(randomEmail, "123123123","Demo","Student0900","M","2222 30000","+65","true",422)
        cy.wait(30000)
      })

    it('User exists with same email', () => {
        cy.sendRequest("dev7809@yopmail.com", "123123123","Demo","Student43","M","","+65","true",422)
        cy.wait(30000)
      })

      it('User did not accept terms and conditions', () => {
        cy.sendRequest(randomEmail, "123123123","Demo","Student43","M","","+65","true",200)
      })
  
})
