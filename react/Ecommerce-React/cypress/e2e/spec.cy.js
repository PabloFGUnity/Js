describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/')

  });

  it('passes', () => {
    cy.get('#Registro').should('have.text','Registrate')
  })

  it('Checkbox clickado del newsletter', () => {
    cy.get('#flexCheckDefault').should('not.be.checked')
  })

  // it('Enlace va a products', () => {
  //   cy.visit('http://localhost:5173/products')
  //   cy.location('pathname').should('eq','/products')
  // })

})