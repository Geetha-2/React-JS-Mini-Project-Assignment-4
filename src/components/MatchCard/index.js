import './index.css'

const MatchCard = props => {
  const {eachRecentMatch} = props
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = eachRecentMatch

  const WonOrLossClassName =
    matchStatus === 'Won' ? 'WonClassName' : 'LossClassName'

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="sub-heading">{competingTeam}</p>
      <p className="text">{result}</p>
      <p className={WonOrLossClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
