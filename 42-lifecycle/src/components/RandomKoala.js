import React, { Component } from 'react'

class RandomKoala extends Component {
  constructor() {
  super()
    console.log(this.__proto__.constructor.name, "constructor")
  }

  componentDidMount() {
    console.log(this.__proto__.constructor.name, "mounting")
  }

  componentDidUpdate() {
      console.log(this.__proto__.constructor.name, "did update")
  }
  render () {
    return (
      <div className="app-children">
        {this.props.koala.image_url
          ? <img src={this.props.koala.image_url} />
          : <b>Loading</b>
        }
      </div>
    )
  }
}

export default RandomKoala
