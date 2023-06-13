'use client';

import React from "react";
import tutorialSteps from "../tutorialSteps.json";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

export function TutorialStepsSlider() {
  const router = useRouter();
  const [stepPosition, setStepPosition] = React.useState<number>(0);
  const [isNextPathLoading, setIsNextPathLoading] = React.useState<boolean>(false);

  function handleNextStep() {
    const hasAnotherStepToShow = stepPosition < tutorialSteps.length - 1;
    
    if(!hasAnotherStepToShow) {
      setIsNextPathLoading(true);
      router.push('/home');
      return;
    }
    
    setStepPosition(position => position + 1);
  }

  function handlePreviousStep() {
    if(stepPosition > 0) setStepPosition(position => position - 1);
  }

  return (
    <section className=" px-4 pb-8 text-white-400 max-w-[500px] flex flex-col gap-8 sm:gap-16 sm:pb-16 mx-auto">
      {isNextPathLoading && <Loader2 className="mx-auto animate-spin" strokeWidth={3} size={64} />}
      
      <div>
        <h2 className="text-md mb-3 font-bold sm:text-lg" data-cy="stepTitle">
          {tutorialSteps[stepPosition].title}
        </h2>
        <p className="text-base lg:text-sm" data-cy="stepContent">
          {tutorialSteps[stepPosition].content}
        </p>
      </div>

      <ul className="flex justify-between text-sm sm:text-md">
        <li>
          <button className="flex gap-3 hover:text-gray-50 transition-colors" data-cy="backStepButton" onClick={handlePreviousStep}>
            <ChevronLeft strokeWidth={3} />
            Anterior
          </button>
        </li>
        <li>
          <button className="flex gap-3 animate-pulse hover:text-gray-50 transition-colors" data-cy="nextStepButton" onClick={handleNextStep}>
            Seguinte
            <ChevronRight strokeWidth={3} />
          </button>
        </li>
      </ul>
    </section>
  );
}