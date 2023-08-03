describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/')

  });

  it('passes', () => {
    cy.get('.read-the-docs').should('have.text','Click on the Vite and TypeScript logos to learn more')
  })

  it('Click en el botón suma 1 en el contador', () => {
    cy.get('#counter').click()
    cy.get('#counter').should('have.text', 'count is 1')

    cy.get('#counter').click()
    cy.get('#counter').should('have.text', 'count is 2')
  })
})