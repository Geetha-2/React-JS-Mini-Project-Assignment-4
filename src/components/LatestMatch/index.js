import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    date,
    venue,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    competingTeam,
    competingTeamLogo,
  } = latestMatchDetails

  return (
    <div>
      <div className="latest-match-container">
        <div className="sub-cont">
          <div className="latest-match-details-1">
            <p className="heading">{competingTeam}</p>
            <p className="date-text">{date}</p>
            <p className="venue-text">{venue}</p>
            <p className="result-text">{result}</p>
          </div>

          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-logo"
          />
        </div>
        <hr className="hr-line" />
        <div className="latest-match-details-2">
          <p className="innings-text">First Innings</p>
          <p className="innings-sub-text">{firstInnings}</p>
          <p className="innings-text">Second Innings</p>
          <p className="innings-sub-text">{secondInnings}</p>
          <p className="man-of-the-match-text">Man Of The Match</p>
          <p className="innings-sub-text">{manOfTheMatch}</p>
          <p className="innings-text">umpires</p>
          <p className="innings-sub-text">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
