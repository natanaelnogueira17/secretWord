import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botao abaixo para jogar</p>
      <button onClick={startGame}>Comecar o Jogo </button>
    </div>
  )
}

export default StartScreen
