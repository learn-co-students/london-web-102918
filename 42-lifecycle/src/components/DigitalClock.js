import React, { Component } from 'react'

class DigitalClock extends Component {

  constructor(props) {
    super(props)
    this.state = {
      time: new Date()
    }
  }

  componentDidMount(){
    this.timeUpdateInterval = window.setInterval(this.updateTime, 1000)
  }

  updateTime = () => {
    this.setState({
      time: new Date()
    })
  }

  componentWillUnmount() {
    window.clearInterval(this.timeUpdateInterval)
  }

  render () {
    const { time } = this.state
    return (
      <div className="app-children">
        <h2 id="digital">
          {time.getHours()} : {time.getMinutes()} : {time.getSeconds() < 10
          ? `0${time.getSeconds()}`
          : time.getSeconds()}
        </h2>
      </div>
    )
  }
}

export default DigitalClock
