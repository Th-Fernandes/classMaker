import { Heading } from ".";

describe('Heading component', () => {
  it('should create right heading HTML element', () => {
    cy.mount(
      <>
        <Heading as="h1">Hello world</Heading>
        <Heading as="h2">Hello world</Heading>
        <Heading as="h3">Hello world</Heading>
      </>
    );
    cy.get('h1').should('exist').and('have.text', 'Hello world'); 
    cy.get('h2').should('exist').and('have.text', 'Hello world'); 
    cy.get('h3').should('exist').and('have.text', 'Hello world'); 
  }); 
});