function PlayerCard({ player, life, onChange, accent }) {
  return (
    <article className={`player-card ${accent}`}>
      <div className="player-header">
        <span className="player-tag">{player}</span>
      </div>

      <p className="life-value">{life}</p>

      <div className="controls">
        <button type="button" className="action-btn plus" onClick={() => onChange(1)}>
          +1
        </button>
        <button type="button" className="action-btn minus" onClick={() => onChange(-1)}>
          -1
        </button>
      </div>
    </article>
  )
}

export default PlayerCard
