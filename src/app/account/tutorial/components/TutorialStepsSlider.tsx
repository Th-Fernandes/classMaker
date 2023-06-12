'use client';

import React from "react";
import tutorialSteps from "../tutorialSteps.json";
import { useRouter } from "next/navigation";

export function TutorialStepsSlider() {
  const router = useRouter();
  const [stepPosition, setStepPosition] = React.useState<number>(0);

  function handleNextStep() {
    const hasAnotherStepToShow = stepPosition < tutorialSteps.length - 1;
    
    if(!hasAnotherStepToShow) return router.push('/home');
    
    setStepPosition(position => position + 1);
  }

  function handlePreviousStep() {
    if(stepPosition > 0) setStepPosition(position => position - 1);
  }

  return (
    <section>
      <div>
        <h2 data-cy="stepTitle">{tutorialSteps[stepPosition].title}</h2>
        <p data-cy="stepContent">{tutorialSteps[stepPosition].content}</p>
      </div>

      <ul>
        <li>
          <button data-cy="backStepButton" onClick={handlePreviousStep}>Anterior</button>
        </li>
        <li>
          <button data-cy="nextStepButton" onClick={handleNextStep}>Seguinte</button>
        </li>
      </ul>
    </section>
  );
}