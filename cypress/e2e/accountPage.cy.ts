describe('account page', () => {
  beforeEach(() => {
    cy.visit('/account');
  });

  it('should redirect to /login route', () => {
    cy
      .get('[data-cy="loginRedirectButton"]')
      .click();

    cy
      .url()
      .should('include', '/login');
  });

  it('should redirect to /tutorial route', () => {
    cy
      .get('[data-cy="tutorialRedirectButton"]')
      .click();

    cy
      .url()
      .should('include', '/tutorial');
  });

  it('should get to /home route when logged in', () => {
    cy
      .get('[data-cy="loginRedirectButton"]')
      .click();
    
    cy
      .get('[data-cy="emailInputLogin"]')
      .type('joseph1987@gmail.com');
    
    cy
      .get('[data-cy="passwordInputLogin"]')
      .type('password123');
     
    cy
      .get('[data-cy="loginButton"]')
      .click();
      
    cy
      .url()
      .should('include', '/home');
  });
});