import { useState } from 'react'
import PlayerCard from './PlayerCard'
import '../styles/LifeCounter.css'

const START_LIFE = 20

function LifeCounter() {
  const [player1Life, setPlayer1Life] = useState(START_LIFE)
  const [player2Life, setPlayer2Life] = useState(START_LIFE)

  const updateLife = (player, delta) => {
    if (player === 1) {
      setPlayer1Life((currentLife) => currentLife + delta)
      return
    }

    setPlayer2Life((currentLife) => currentLife + delta)
  }

  const resetLives = () => {
    const confirmed = window.confirm('¿Realmente deseas reiniciar las vidas?')

    if (confirmed) {
      setPlayer1Life(START_LIFE)
      setPlayer2Life(START_LIFE)
    }
  }

  return (
    <main className="life-counter-app">
      <div className="scene-glow glow-one" />
      <div className="scene-glow glow-two" />

      <header className="app-header">
        <p className="eyebrow">MTG</p>
        <h1>Life Counter</h1>
      </header>

      <section className="players-panel">
        <PlayerCard
          player="Jugador 1"
          life={player1Life}
          onChange={(delta) => updateLife(1, delta)}
          accent="player-one"
        />

        <PlayerCard
          player="Jugador 2"
          life={player2Life}
          onChange={(delta) => updateLife(2, delta)}
          accent="player-two"
        />
      </section>

      <button type="button" className="reset-button" onClick={resetLives}>
        Reiniciar vidas
      </button>
    </main>
  )
}

export default LifeCounter
