import React from 'react'
import Painting from './Painting'

import './PaintingList.css'

class PaintingsList extends React.Component {
  render () {
    return (<div className="ui list">
      {this.props.paintings.map(currentPainting => (
        <Painting
          key={currentPainting.id}
          paintingData={currentPainting}
        />
      ))}
    </div>)
  }
}

export default PaintingsList
