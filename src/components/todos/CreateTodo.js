import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  state = {
    text: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
    this.setState({
      text: "",
    })
  }
  
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

 
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="add to do" 
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
