///<reference types="cypress" />

  cy.requestHeader =  {
    'Content-Type': 'application/json',
    'tenant-access-token': 'Zx2EE58K0tyzL8V4Xh7GLYYhQzHcz7Q05jrRXAcfw1',
    'user-token':'1e808d35ffb9c46b3f1187869f9f975b21213591d0f0618c2c030750fae8541f',
    'User-Agent': 'wTRGdmtTaDUzdCDD',
    'platform': 'web'
  }
  cy.url = 'https://sandbox.cialfo.sg/v3/reports'

    describe('Display Reports', () => {
      
      it('response body matches string class_profiles via name', () => {
        cy.request({
          method: 'GET',
          url: cy.url,
          headers: cy.requestHeader,
          failOnStatusCode: false
        }).then( response => {
          expect(response.body.status.details.reports[0]).to.have.property('name','class_profiles')        
        })
      })
        it('response body via id check', () => {
          cy.request({
            method: 'GET',
            url: cy.url,
            headers: cy.requestHeader,
            failOnStatusCode: false
          }).then( response => {
            expect(response.body.status.details.reports[6]).to.have.property('id',5)        
          })
      })   
  })
