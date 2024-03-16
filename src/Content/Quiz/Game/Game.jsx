import questions from "../../../State/State"



export function Game({step, question, onClickVariantAnswer }) {
  const percentage = Math.round((step / questions.length) * 100);
  console.log(percentage);
  return (
    <>

      {/* <div className="progress">
        <div style={{ height: '25px', width: '20%' }} className="line__progress"></div>
      </div> */}

      <div className="w3-light-grey">
        <div className="w3-blue" style={{height: '24px', width: `${percentage}%`}}></div>
      </div>

      <div className="qustion__title__block">
        <h1 className="question__title">{question.title}</h1>
      </div>

      <ul>
        {question.variants.map((text, index) => (
          <li
            onClick={() => onClickVariantAnswer(index)}
            className="question__item"
            key={text}>{text}
          </li>))}
      </ul>
    </>
  )
}