/// <reference types="cypress" />

describe('landing page', () => {
  it('visit website', () => {
    cy.visit('http://localhost:4000/')
  })
  it('hamburger click and open', () => {
    cy.get('#hamburger').click()
  })
  it('hamburger click and  close', () => {
    cy.get('#hamburger.open').click()
  })
})
