import React from 'react'
import { Link } from 'react-router-dom'

const Painting = ({ selectPainting, paintingData }) => {
  const { title, image, slug, artist, votes, id } = paintingData
  return (
    <Link to={`/paintings/${id}`}>
      <div className="item painting">
        <div className="ui small image">
          <img src={image} alt={slug} />
        </div>
        <div className="header">{`"${title}" by ${
          artist.name
        }`}</div>
        <div className="description">
          <a>
            <i className="large caret up icon" />
            {votes} votes
          </a>
        </div>
      </div>
    </Link>
  )
}

export default Painting

//
// class Painting extends React.Component {
//   render () {
//     return <div>Painting</div>
//   }
// }
//
// class Painting extends Component {
//   render () {
//     return <div>Painting</div>
//   }
// }
