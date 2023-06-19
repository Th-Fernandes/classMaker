describe('when user is creating his account', () => {
  it('should redirect to /home when successfully done', () => {
    cy.visit('/account');

    cy.get('[data-cy="tutorialRedirectButton"]').click();
    
    cy.location('pathname').should('eq', '/account/tutorial');

    cy.get('[data-cy="nextStepButton"]').click();
    cy.get('[data-cy="nextStepButton"]').click();

    cy.location('pathname').should('eq', '/account/signIn');

    cy.get('[data-cy="signInUsername"]').type('John Doe');
    cy.get('[data-cy="signInEmail"]').type('johnDoe97@gmail.com');
    cy.get('[data-cy="signInPasword"]').type('mypassword123'); 
    cy.get('[data-cy="signInSubmitCredentials"]').click();

    cy.location('pathname').should('eq', '/home');
  });
});