import React from 'react'

import Item from './Item'

import API from '../API'

class Inventory extends React.Component {
  state = {
    items: []
  }

  getInventory () {
    API.getInventory()
      .then(items => this.setState({ items }))
  }

  style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap'
  }

  componentDidMount () {
    const { username, history } = this.props
    if (!username) {
      history.push('/signin')
    } else {
      this.getInventory()
    }
  }

  render () {
    const { items } = this.state

    return (
      <div style={this.style} className='user-list'>
        <h3>Here's your inventory:</h3>
        { items.length === 0 && <p>Sorry, you don't have any items.</p>}
        {
          items.map(item =>
            <Item key={item.id} item={item} />
          )
        }
      </div>
    )
  }
}

export default Inventory
