import { SubscriptionsItem } from "./SubscriptionsItem";

describe('SubscriptionsItem component', () => {
  beforeEach(() => {
    cy.mount(<SubscriptionsItem title="Lorem Ipsum" tags={['HTML', 'CSS']}/>);
  });

  it('should render a single tag when on mobile', () => {
    cy.viewport(360, 750);

    cy
      .get('[data-cy="subscriptionsItemTags"]')
      .find('li')
      .should('have.length', 1);
  });
});