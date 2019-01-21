import React from 'react'
import Painting from './Painting'

import './PaintingList.css'

class PaintingsList extends React.Component {
  render () {
    const { selectPainting } = this.props
    return (<div class="ui list">
      {this.props.paintings.map(currentPainting => (
        <Painting
          key={currentPainting.id}
          selectPainting={selectPainting}
          paintingData={currentPainting}
        />
      ))}
    </div>)
  }
}

export default PaintingsList
