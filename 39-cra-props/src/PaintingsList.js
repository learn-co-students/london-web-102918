import React from 'react'
import Painting from './Painting'

class PaintingsList extends React.Component {

  handlePaintingClick(paintingId) {
    console.log('deleting paining...' , paintingId)
  }
  
  render () {
    return (<ul>
      {this.props.paintings.map(currentPainting => (
        <Painting
          handleClick={this.handlePaintingClick}
          key={currentPainting.id}
          paintingData={currentPainting}/>
        ))}
      </ul>)
  }
}

export default PaintingsList
