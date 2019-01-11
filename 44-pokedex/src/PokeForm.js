import React, { Component } from 'react';

class PokeForm extends Component {

  state = {
    name: '',
    image: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmitHandler(this.state)
  }
  render () {
    return (
      <form id='poke-form' onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" name='name' value={this.state.name} placeholder="Name your Pokemon" />
        <input onChange={this.handleChange} type="text" name='image' value={this.state.image} placeholder="Add an image (URL)" />
        <input type='submit' value="Add Pokemon" />
      </form>
    );
  }
}

export default PokeForm;
