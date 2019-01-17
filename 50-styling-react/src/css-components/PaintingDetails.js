import React from 'react'
import { Link } from 'react-router-dom'

import styles from './PaintingDetails.css'

const PaintingDetails = ({ selectedPainting }) =>
  <div className={styles.paintingDetails}>
    <h3>{selectedPainting.title}</h3>
    <figure>
      <img src={selectedPainting.image} alt='' />
      <figcaption>{selectedPainting.dimensions.height} x {selectedPainting.dimensions.width}</figcaption>
    </figure>
    <h3>Author: { selectedPainting.artist.name } ({ selectedPainting.artist.hometown })</h3>
    <p>{selectedPainting.artist.birthday} - {selectedPainting.artist.deathday}</p>
    <p><Link to='/paintings'><button>GO BACK</button></Link></p>
  </div>

export default PaintingDetails
