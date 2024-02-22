import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    id: '',
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getLatestAndRecentMatchDetails = each => ({
    umpires: each.umpires,
    result: each.result,
    manOfTheMatch: each.man_of_the_match,
    id: each.id,
    date: each.date,
    venue: each.venue,
    competingTeam: each.competing_team,
    competingTeamLogo: each.competing_team_logo,
    firstInnings: each.first_innings,
    secondInnings: each.second_innings,
    matchStatus: each.match_status,
  })

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedTeamBannerUrl = data.team_banner_url
    const latestMatchDetailsObject = this.getLatestAndRecentMatchDetails(
      data.latest_match_details,
    )
    const recentMatchesDetails = data.recent_matches
    const recentMatchObject = recentMatchesDetails.map(each =>
      this.getLatestAndRecentMatchDetails(each),
    )
    this.setState({
      isLoading: false,
      teamBannerUrl: updatedTeamBannerUrl,
      latestMatchDetails: latestMatchDetailsObject,
      recentMatches: recentMatchObject,
      id,
    })
  }

  renderGetTeamMatchDetails = () => {
    const {teamBannerUrl, latestMatchDetails, recentMatches} = this.state
    return (
      <div>
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <h1 className="latest-matches-heading">Latest Matches</h1>
        <div className="un-list-latest-match-details">
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </div>
        <ul className="un-list-recent-match-details">
          {recentMatches.map(eachObj => (
            <MatchCard eachRecentMatch={eachObj} key={eachObj.id} />
          ))}
        </ul>
        )
      </div>
    )
  }

  render() {
    const {isLoading, id} = this.state
    return (
      <div className={`team-match-container ${id}`}>
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          this.renderGetTeamMatchDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
