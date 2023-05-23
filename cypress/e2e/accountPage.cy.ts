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
});