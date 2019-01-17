import React, { Component } from "react";

export default class Navbar extends Component {
  state = {
    selectedOption: "todo"
  };

  handleOptionChange = e => {
    this.setState({ selectedOption: e.target.value });
  };

  render() {
    return (
      <form>
        <label>
          <input
            type="radio"
            name="react-tips"
            value="todo"
            onChange={this.handleOptionChange}
            checked={this.state.selectedOption === "todo"}
            className="form-check-input"
          />
          Todo
        </label>

        <label>
          <input
            type="radio"
            name="react-tips"
            value="doing"
            checked={this.state.selectedOption === "doing"}
            onChange={this.handleOptionChange}
            className="form-check-input"
          />
          Doing
        </label>

        <label>
          <input
            type="radio"
            name="react-tips"
            value="done"
            checked={this.state.selectedOption === "done"}
            onChange={this.handleOptionChange}
            className="form-check-input"
          />
          Done
        </label>
      </form>
    );
  }
}
