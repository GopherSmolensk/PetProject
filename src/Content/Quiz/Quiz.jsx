import { useState } from "react";
import { Game } from "./Game/Game.jsx";
import { Result } from "./Result/Result.jsx";
import questions from "../../State/State.js";


export function Quiz() {

  const [step, setStep] = useState(0);
  const question = questions[step];

  const onClickVariantAnswer = (index) => {
    console.log(step, index);
    setStep(step + 1);
  }

  return (

    <div className="quiz">
      <div className="quiz__title__block">
        <h1 className="quiz__title">ТЕСТ</h1>
      </div>
      {
        step != questions.length ?
          <Game step={step} question={question} onClickVariantAnswer={onClickVariantAnswer} /> : <Result />
      }
    </div>
  )
}