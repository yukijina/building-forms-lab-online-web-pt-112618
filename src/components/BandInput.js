// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state.name)
    this.setState({name: ''})
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input value={this.state.name} name="name" onChange={this.handleChange}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}


export default BandInput



