

const resultImg = require('./Images/firework.jpg')

export function Result() {
  return (
    <div className="result">
      <img className="result__img" src={resultImg} alt="img" />
      <h2>Вы отгадали 3 ответа из 10</h2>
      <button>Попробовать снова</button>
    </div>
  )
}