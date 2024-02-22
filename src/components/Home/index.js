import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamCardsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamCardsList()
  }

  getTeamCardsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedCardsList = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({
      teamCardsList: updatedCardsList,
      isLoading: false,
    })
  }

  render() {
    const {teamCardsList, isLoading} = this.state

    return (
      <div className="ipl-bg-container">
        <div className="ipl-dashboard-heading-img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <ul className="un-list-team-cards-cont">
            {teamCardsList.map(eachCard => (
              <TeamCard key={eachCard.id} cardDetails={eachCard} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
