import { TutorialStepsSlider } from "./components/TutorialStepsSlider";

export default function TutorialPage() {
  return (
    <main className="bg-[url('/bg/tutorial-page.png')] h-screen bg-cover bg-no-repeat ">
      <div className="bg-gradient-to-t from-black-400 fixed bottom-0 right-0 left-0 ">
        <TutorialStepsSlider />
      </div>
    </main>
  );
}