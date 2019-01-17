import React from 'react'
import { colors } from './theme'

const styles = {
  container: {
    border: '1px solid green',
    padding: '1em',
    boxShadow: '5px 5px 10px black',
    listStyleType: 'none',
    marginBottom: '1em',
    color: colors.primary
  }
}


const PaintingsListJS = (props) => {

  return <ul>
    {props.paintings.map(painting => {
      const { title, image, slug, artist, votes, id } = painting

      return (<li key={title} style={styles.container}>
      <div>
        <div>
          <img src={image} alt={slug} />
        </div>
        <div>{`"${title}"`}</div>
        <div>
          <a>
            {votes} votes
          </a>
        </div>
      </div>
      </li>)
    })}
  </ul>
}

export default PaintingsListJS
