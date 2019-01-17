import React from 'react'

import styled  from 'styled-components'

const Box = styled.li`
  border: 1px solid green;
  padding: 1em;
  box-shadow: 5px 5px 10px black;
  list-style-type: none;
  margin-bottom: 1em;
  color: ${props => props.theme.colors.primary}
`


const BoxWithBigMargin = styled(Box)`
  margin: 3em;
`

const PaintingsListJS = (props) => {

  return <ul>
    {props.paintings.map(painting => {
      const { title, image, slug, artist, votes, id } = painting
      return (<BoxWithBigMargin key={title}>
          {title}
      </BoxWithBigMargin>)
    })}
  </ul>
}

export default PaintingsListJS
