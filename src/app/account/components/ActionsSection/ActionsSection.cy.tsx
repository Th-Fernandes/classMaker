import React from 'react';
import { ActionsSection } from '.';

describe('<ActionsSection />', () => {
  it('should contain 2 buttons', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ActionsSection />);
    
    cy.get('button').should('have.length', 2);
  });
});  