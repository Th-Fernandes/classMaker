import React from 'react';
import { ActionsSection } from '.';

describe('<ActionsSection />', () => {
  it('should contain 2 buttons', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ActionsSection />);
    
    cy.get('button').should('have.length', 2);
  });

  it('should redirect to login page when click on button', () => {
    cy.mount(<ActionsSection/>);
    const appPath = cy.url();

    const loginRedirectButton = cy.get('button#loginRedirect');
    loginRedirectButton.click();

    expect(cy.url()).not.equal(appPath);
  });
});  