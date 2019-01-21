import React from 'react'

import './PaintingDetails.css'

const PaintingDetails = ({ selectedPainting, deselectPainting }) =>
  <div class='painting-details'>
    <h3>{selectedPainting.title}</h3>
    <figure>
      <img src={selectedPainting.image} alt='' />
      <figcaption>{selectedPainting.dimensions.height} x {selectedPainting.dimensions.width}</figcaption>
    </figure>
    <h3>Author: { selectedPainting.artist.name } ({ selectedPainting.artist.hometown })</h3>
    <p>{selectedPainting.artist.birthday} - {selectedPainting.artist.deathday}</p>
    <p><button onClick={deselectPainting}>GO BACK</button></p>
  </div>

export default PaintingDetails
