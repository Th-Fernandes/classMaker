describe('login form', () => {
  it('should redirect to /home when successfully login', () => {
    cy.get('[data-cy="emailInput"]').type('test@gmail.com');
    cy.get('[data-cy="passwordInput"]').type('abc123456');
    cy.get('[data-cy="submitLoginData"]').click();
    
    cy.location().should('eq', '/home');
  });
});