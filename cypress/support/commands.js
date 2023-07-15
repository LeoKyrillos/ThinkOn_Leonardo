// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const input = require('../fixtures/input.json')

Cypress.Commands.add('validData', (validName, validPhone, validEmail) =>{
    cy.get(':nth-child(1) > .form-control').should('be.visible').type(validName)
    cy.get(':nth-child(2) > .form-control').should('be.visible').type(validPhone)
    cy.get(':nth-child(3) > .form-control').should('be.visible').type(validEmail)
    cy.get('.btn').click()
    cy.get('tbody > :nth-child(2) > :nth-child(1)').should('be.visible').should('have.text', input.validName)
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('be.visible').should('have.text', input.validPhone)
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should('be.visible').should('have.text', input.validEmail)
    
})

Cypress.Commands.add('invalidName', (invalidName, validPhone, validEmail) =>{
    cy.get(':nth-child(1) > .form-control').should('be.visible').type(invalidName)
    cy.get(':nth-child(2) > .form-control').should('be.visible').type(validPhone)
    cy.get(':nth-child(3) > .form-control').should('be.visible').type(validEmail)
    cy.get('.btn').click()
    cy.get('tbody > :nth-child(2) > :nth-child(1)').should('be.visible').should('have.text', input.invalidName)
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('be.visible').should('have.text', input.validPhone)
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should('be.visible').should('have.text', input.validEmail)
    
})

Cypress.Commands.add('invalidPhone', (validName, invalidPhone, validEmail) =>{
    cy.get(':nth-child(1) > .form-control').should('be.visible').type(validName)
    cy.get(':nth-child(2) > .form-control').should('be.visible').type(invalidPhone)
    cy.get(':nth-child(3) > .form-control').should('be.visible').type(validEmail)
    cy.get('.btn').click()
    cy.get('tbody > :nth-child(2) > :nth-child(1)').should('be.visible').should('have.text', input.validName)
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('be.visible').should('have.text', input.invalidPhone)
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should('be.visible').should('have.text', input.validEmail)
    
})

Cypress.Commands.add('invalidNameAndPhone', (invalidName, invalidPhone, validEmail) =>{
    cy.get(':nth-child(1) > .form-control').should('be.visible').type(invalidName)
    cy.get(':nth-child(2) > .form-control').should('be.visible').type(invalidPhone)
    cy.get(':nth-child(3) > .form-control').should('be.visible').type(validEmail)
    cy.get('.btn').click()
    cy.get('tbody > :nth-child(2) > :nth-child(1)').should('be.visible').should('have.text', input.invalidName)
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('be.visible').should('have.text', input.invalidPhone)
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should('be.visible').should('have.text', input.validEmail)
    
})

Cypress.Commands.add('invalidEmail', (validName, validPhone, invalidEmail) =>{
    cy.get(':nth-child(1) > .form-control').should('be.visible').type(validName)
    cy.get(':nth-child(2) > .form-control').should('be.visible').type(validPhone)
    cy.get(':nth-child(3) > .form-control').should('be.visible').type(invalidEmail)
    cy.get('.btn').click()
    cy.get('tbody > :nth-child(2) > :nth-child(1)').should('be.visible').should('have.text', input.validName)
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('be.visible').should('have.text', input.validPhone)
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should('be.visible').should('have.text', input.invalidEmail)
    
})

Cypress.Commands.add('invalidNameAndEmail', (invalidName, validPhone, invalidEmail) =>{
    cy.get(':nth-child(1) > .form-control').should('be.visible').type(invalidName)
    cy.get(':nth-child(2) > .form-control').should('be.visible').type(validPhone)
    cy.get(':nth-child(3) > .form-control').should('be.visible').type(invalidEmail)
    cy.get('.btn').click()
    cy.get('tbody > :nth-child(2) > :nth-child(1)').should('be.visible').should('have.text', input.invalidName)
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('be.visible').should('have.text', input.validPhone)
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should('be.visible').should('have.text', input.invalidEmail)
    
})

Cypress.Commands.add('invalidPhoneAndEmail', (validName, invalidPhone, invalidEmail) =>{
    cy.get(':nth-child(1) > .form-control').should('be.visible').type(validName)
    cy.get(':nth-child(2) > .form-control').should('be.visible').type(invalidPhone)
    cy.get(':nth-child(3) > .form-control').should('be.visible').type(invalidEmail)
    cy.get('.btn').click()
    cy.get('tbody > :nth-child(2) > :nth-child(1)').should('be.visible').should('have.text', input.validName)
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('be.visible').should('have.text', input.invalidPhone)
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should('be.visible').should('have.text', input.invalidEmail)
    
})

Cypress.Commands.add('allInvalidData', (invalidName, invalidPhone, invalidEmail) =>{
    cy.get(':nth-child(1) > .form-control').should('be.visible').type(invalidName)
    cy.get(':nth-child(2) > .form-control').should('be.visible').type(invalidPhone)
    cy.get(':nth-child(3) > .form-control').should('be.visible').type(invalidEmail)
    cy.get('.btn').click()
    cy.get('tbody > :nth-child(2) > :nth-child(1)').should('be.visible').should('have.text', input.invalidName)
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('be.visible').should('have.text', input.invalidPhone)
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should('be.visible').should('have.text', input.invalidEmail)

})

Cypress.Commands.add('deleteRegister', (validName, validPhone, validEmail) =>{
    cy.get(':nth-child(1) > .form-control').should('be.visible').type(validName)
    cy.get(':nth-child(2) > .form-control').should('be.visible').type(validPhone)
    cy.get(':nth-child(3) > .form-control').should('be.visible').type(validEmail)
    cy.get('.btn').click()
    cy.get('tbody > :nth-child(2) > :nth-child(1)').should('be.visible').should('have.text', input.validName)
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('be.visible').should('have.text', input.validPhone)
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should('be.visible').should('have.text', input.validEmail)
    cy.get('.btn-danger').click()
       
})