import React , { Component } from 'react'

const Painting = (props) => {
  const { title, image, slug, artist, votes } = props.paintingData;
  return (
    <div className="item">
      <div className="middle aligned content">
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
    </div>
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
