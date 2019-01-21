import React, {Component} from 'react'

import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  state = {
    color: this.props.color || 'green'
  }

  changeColor = () => {
      const color = this.state.color === 'blue'
        ? this.props.color || 'green'
        : 'blue'

      this.setState({color: color})
  }

  render() {
    return (<div className={`ui inverted ${this.state.color} menu`}>
        <Link to='/paintings' className='item'>
          <h2 className="ui header">
            <i className="paw icon"></i>
            <div className="content">
              {this.props.title}
            </div>
            <div className="sub header">
              {this.props.subtitle}
            </div>
          </h2>
        </Link>
        <div className="item">
          <div
            onClick={this.changeColor}
            className="ui button"
          >
            Change Color
          </div>
        </div>
      </div>)
    }
}
