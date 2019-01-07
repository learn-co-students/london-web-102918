import React , { Component } from 'react'

const Painting = (props) => {
  const { title, image } = props.paintingData;
  return (<li onClick={() => props.handleClick(props.id)}>
    <h1>{title}</h1>
    <img src={image} />
  </li>)
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
