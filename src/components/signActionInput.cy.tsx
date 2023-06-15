import { SignActionInput } from "@/components/signActionInput";

describe('login input component', () => {
  beforeEach(() => {
    cy.mount(<SignActionInput id="emailInputLogin" label="E-mail" />);
  });
  
  it('should highlight on focus and loses it after blur', () => {
    cy.get('[data-cy="emailInputLogin"]').click()
      .should('have.class', 'focus:outline')
      .and('have.class','focus:outline-2')
      .and('have.class','focus:outline-black-400');
    
    // cy.get('[data-cy="emailLabel"]').should('have.css, color, #000000');
    
    cy.get('[data-cy="emailInputLogin"]').type('user@gmail.com').blur()
      .should('have.class', 'border')
      .and('have.class', 'border-1')
      .and('have.class','border-gray-400');
    // cy.get('[data-cy="emailLabel"]').should('have.css, color, #7C7C7C');
  });
});