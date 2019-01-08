import React from 'react'
import Painting from './Painting'

class PaintingsList extends React.Component {

  handlePaintingClick(paintingId) {
    console.log('deleting paining...' , paintingId)
  }

  render () {
    return (<div class="ui list">
      {this.props.paintings.map(currentPainting => (
        <Painting
          handleClick={this.handlePaintingClick}
          key={currentPainting.id}
          paintingData={currentPainting}/>
        ))}
      </div>)
  }
}

export default PaintingsList
