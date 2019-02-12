import React, { Component } from 'react';
import './App.css';
import NavBar from './Header'
import ProductsContainer from './ProductsContainer'
import SearchForm from './SearchForm'
import Cart from './Cart'



class App extends Component {
  state = {
    products: [],
    searchTerm: "",
    cart: [],
    showCart: false
  }

  componentDidMount() {
    fetch('http://localhost:3000/products')
    .then(resp => resp.json())
    .then(resp => this.setState({products: resp}))
  }

  toggleCart = () => {
    this.setState({
      showCart: !this.state.showCart
    })
  }

  handleSearchInput = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  addToCart = (product) => {
    this.setState({
      cart: [...this.state.cart, product]
    })
  }

  filterProducts = () => {
    return this.state.products.filter(product =>
      product.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
      product.category.includes(this.state.searchTerm)
     )
  }


  render() {

    return (
      <div className="App">
        <NavBar toggleCart={this.toggleCart} numItems={this.state.cart.length}/>
        <SearchForm handleSearchInput={this.handleSearchInput}/>
        {
          this.state.showCart ? <Cart cartItems={this.state.cart} />
          :  <ProductsContainer addToCart={this.addToCart} products={this.filterProducts()}/>
        }
        </div>
    );
  }
}

export default App;
