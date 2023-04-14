
///<reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // return false to prevent Cypress from failing the test
    return false
  })

describe('Table actions against table with ID', () => {
    it('check rows and columns', ()=> {
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")
        cy.get('#htmlTableId > tbody > tr> th').should('have.length', '3')
        cy.get('#htmlTableId > tbody > tr').should('have.length', '4')
    })
    it('check rows and columns for a table with no ID', ()=> {
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")
        cy.get('.et_pb_text_4 > .et_pb_text_inner > table > tbody > tr> th').should('have.length', '3')
        cy.get('.et_pb_text_4 > .et_pb_text_inner > table > tbody > tr').should('have.length', '4')
    })
    it('Checking text Manual inside table with no ID', ()=> {
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")
        cy.get('.et_pb_text_4 > .et_pb_text_inner > table > tbody > tr:nth-child(4) > td:nth-child(2)')
        .contains('Manual')
        .should('be.visible')
    })
    it('Reading data from table with ID', ()=>{
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")
        cy.get('#htmlTableId tbody tr').each(($t1row) => {
            var col1 = $t1row.find('td:nth-child(1)').text()
            var col2 = $t1row.find('td:nth-child(2)').text()
            var col3 = $t1row.find('td:nth-child(3)').text()

            var logMessage = `Title: ${col1}, Work: ${col2}, Salary: ${col3}` 
            cy.log(logMessage)
            // used cy.writeFile method which will generate a log.txt file and save the logs of generated data from table //
            cy.writeFile('tabledata.txt', logMessage + '\n', { flag: 'a+' })
          })    
    })
    it('Reading data from table with no ID', ()=>{
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")
        cy.get('.et_pb_text_4 .et_pb_text_inner tbody tr').each(($t2row) => {
            var col1 = $t2row.find('td:nth-child(1)').text()
            var col2 = $t2row.find('td:nth-child(2)').text()
            var col3 = $t2row.find('td:nth-child(3)').text()

            var logMessage = `Title: ${col1}, Work: ${col2}, Salary: ${col3}` 
            cy.log(logMessage)
            cy.writeFile('tabledatanoID.txt', logMessage + '\n', { flag: 'a+' })
          })    
    })

    it('Reading data from same row', ()=>{
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")
        cy.get('#htmlTableId tbody tr').each(($trow) => {
            const title = $trow.find('td:nth-child(1)').text()
            if (title ==='Automation Testing Architect'){
                const work = $trow.find('td:nth-child(2)').text() 
                const salary =$trow.find('td:nth-child(3)').text()
                expect(work).to.equal('Automation')
                expect(salary).to.equal('$120,000+')
            }
    
          })    
    })
})