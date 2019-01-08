import React, {Component} from 'react'

export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: props.color || 'green'
    }
  }

  changeColor = () => {
      const color = this.state.color === 'blue'
        ? this.props.color || 'green'
        : 'blue'

      this.setState({color: color})
  }

  render() {
    return (<div class={`ui inverted ${this.state.color} menu`}>
        <a class='item'>
          <h2 class="ui header">
            <i class="paw icon"></i>
            <div class="content">
              {this.props.title}
            </div>
            <div class="sub header">
              {this.props.subtitle}
            </div>
          </h2>
        </a>
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
