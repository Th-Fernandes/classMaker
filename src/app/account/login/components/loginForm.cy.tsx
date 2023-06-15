import { LoginForm } from "./loginForm";

describe('login form', () => {
  it('should redirect to /home when successfully login', () => {
    cy.mount(<LoginForm/>);

    cy.get('[data-cy="emailInputLogin"]').type('test@gmail.com');
    cy.get('[data-cy="passwordInputLogin"]').type('abc123456');
    cy.get('[data-cy="submitLoginData"]').click().should('exist');
    
  });
});