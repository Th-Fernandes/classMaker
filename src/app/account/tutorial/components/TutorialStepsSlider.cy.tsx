import React from "react";
import tutorialSteps from "../tutorialSteps.json";
import { TutorialStepsSlider } from "./TutorialStepsSlider";
import MockNextRouter from "./RouterMock";

describe('TutorialStepsSlider', () => {
  beforeEach(() => {
    cy.mount(
      <MockNextRouter>
        <TutorialStepsSlider />
      </MockNextRouter>
    );
  });

  it('should navigate back and forth through tutorial steps', () => {
    cy.get('[data-cy="nextStepButton"]').click();

    cy.get('[data-cy="stepTitle"]').should('have.text', tutorialSteps[1].title);
    cy.get('[data-cy="stepContent"]').should('have.text', tutorialSteps[1].content);

    cy.get('[data-cy="backStepButton"]').click();
    
    cy.get('[data-cy="stepTitle"]').should('have.text', tutorialSteps[0].title);
    cy.get('[data-cy="stepContent"]').should('have.text', tutorialSteps[0].content);    
  });
});

