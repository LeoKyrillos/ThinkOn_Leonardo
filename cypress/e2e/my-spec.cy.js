/// <reference types = "cypress" />

const input = require('../fixtures/input.json')

describe('Test Contact App', () => {

 
  beforeEach(() => {
    cy.visit('./contact_app.html')
  })
  
  afterEach(() => {
    cy.screenshot()
  })

  it('Test if the application loads correctly', () => {
    cy.get('h1.text-center').should('have.text', 'Contact List App');
    cy.get('table tbody tr').should('have.length', 1)
  })

  it('Test if the application register with the valid data', () => {    
    cy.validData(input.validName, input.validPhone, input.validEmail)
        
  })
 
  it('Test if the application register with an invalid Name', () => {
    cy.invalidName(input.invalidName, input.validPhone, input.validEmail)
       
  })

  it('Test if the application register with an invalid Phone', () => {
    cy.invalidPhone(input.validName, input.invalidPhone, input.validEmail)
    
  })

  it('Test if the application register with an invalid Name and Phone', () => {    
    cy.invalidNameAndPhone(input.invalidName, input.invalidPhone, input.validEmail)
           
  })

  it('Test if the application register with an invalid Email', () => {    
    cy.invalidEmail(input.validName, input.validPhone, input.invalidEmail)
            
  })

  it('Test if the application register with an invalid Name and Email', () => {
    cy.invalidNameAndEmail(input.invalidName, input.validPhone, input.invalidEmail)

  })

  it('Test if the application register with an invalid Phone and Email', () => {
    cy.invalidPhoneAndEmail(input.validName, input.invalidPhone, input.invalidEmail)
        
  })

  it('Test if the application register with all invalid data', () => {    
    cy.allInvalidData(input.invalidName, input.invalidPhone, input.invalidEmail)
        
  })

  it('Test if the application register without data', () => {
    cy.get('.btn').click()
    cy.get('tbody > :nth-child(2) > :nth-child(1)').should('be.visible').should('have.text', input.emptyDataName)
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('be.visible').should('have.text', input.emptyDataPhone)
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should('be.visible').should('have.text', input.emptyDataEmail)
    
  })

  it('Test if the application edit and save the changes', () => {
    cy.get(':nth-child(1) > .form-control').type(input.invalidName)
    cy.get(':nth-child(2) > .form-control').type(input.invalidPhone)
    cy.get(':nth-child(3) > .form-control').type(input.invalidEmail)
    cy.get('.btn').click()
    cy.get('tbody > :nth-child(2) > :nth-child(1)').should('have.text', input.invalidName)
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', input.invalidPhone)
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should('have.text', input.invalidEmail)
    cy.get(':nth-child(2) > :nth-child(4) > .btn-info').click()
    cy.get(':nth-child(2) > :nth-child(1) > input').clear()
    cy.get(':nth-child(2) > :nth-child(2) > input').clear()
    cy.get(':nth-child(2) > :nth-child(3) > input').clear()
    cy.get('tbody > :nth-child(2) > :nth-child(1)').type(input.validName)
    cy.get(':nth-child(2) > :nth-child(2) > input').type(input.validPhone)
    cy.get(':nth-child(2) > :nth-child(3) > input').type(input.validEmail)
    cy.get(':nth-child(4) > .btn').click()
    cy.get('tbody > :nth-child(2) > :nth-child(1)').should('have.text', input.validName)
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', '')
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should('have.text', '')
        
  })

  it('Test if the application delete register', () => {
    cy.deleteRegister(input.validName, input.validPhone, input.validEmail)

  })


});