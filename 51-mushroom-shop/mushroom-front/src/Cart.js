import React from 'react'
import { Segment, Header } from 'semantic-ui-react'


const ProductsContainer = (props) => (
  <Segment>
    <Header>
      Shopping Cart
    </Header>
    {props.cartItems.map(item => <div>{item.name}</div>)}
  </Segment>
)

export default ProductsContainer
