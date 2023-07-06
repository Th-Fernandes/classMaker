import { SubscriptionsItem} from "./SubscriptionsItem";
import { useRenderedTagsAmount } from "./useRenderedTagsAmount";



describe('SubscriptionsItem component on mobile', () => {
  beforeEach(() => {
    cy.viewport(360, 750);
    cy.mount(<SubscriptionsItem title="Lorem Ipsum" tags={['HTML', 'CSS', 'js']}/>);
  });

  it('should render a single tag when on mobile', () => {
    cy.viewport(360, 750);

    cy
      .get('[data-cy="subscriptionsItemTags"]')
      .find('li')
      .should('have.length', 1);
  });  
});

describe('SubscriptionsItem component on tablet and desktop', () => {
  beforeEach(() => {
    cy.viewport(1024, 900);
    cy.mount(<SubscriptionsItem title="Lorem Ipsum" tags={['HTML', 'CSS', 'js']}/>);
  });

  it('should render more than a tag when on bigger screens', () => {
    cy
      .get('[data-cy="subscriptionsItemTags"]')
      .find('li')
      .should('have.length', 2);
  });
});