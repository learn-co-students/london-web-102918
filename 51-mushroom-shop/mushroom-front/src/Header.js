import React from 'react'
import { Header, Icon, Text, Button } from 'semantic-ui-react'

 const NavBar = (props) => {
  return (<Header>
            <h1>Mushroom Shop</h1>
              <Header sub>
                  <Button onClick={props.toggleCart}>
                    <Icon name='cart arrow down' size='small' />
                 </Button>
                 <div>{props.numItems}</div>
              </Header>
          </Header>)
}

export default NavBar
