import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange = (data) => {
    this.setState({
      [data.name]: data.value
    })
  }

  handleSubmit = (event) => {
      event.preventDefault()
      fetch('http://localhost:3000/pokemon', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body:JSON.stringify({
          name: this.state.name,
          sprites: {
            back:this.state.backUrl,
            front: this.state.frontUrl
          },
          stats: [{
            name: "hp",
            value: this.state.hp
          }]
        })
      })
      .then(resp => resp.json())
      .then(pokemon => this.props.addPokemon(pokemon))
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
