import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {cardDetails} = props
  const {id, name, teamImageUrl} = cardDetails
  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="li-container">
        <button type="button" className="card-container">
          <img src={teamImageUrl} alt={name} className="team-image" />
          <p className="team-card-name">{name}</p>
        </button>
      </li>
    </Link>
  )
}

export default TeamCard
