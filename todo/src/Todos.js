import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedTask } from './actions';

class Todos extends Component {
  render() {
    return (
    <ul>
      {this.props.todos.map((todos, i) => {
        return (
          <li 
            key={i}
            onClick={() => this.props.selectedTask(todos)}>
            {todos.id}
            {/* {todos.completed = true} */}
          </li>
        );
      })}
    </ul>
    );
  }
}

//
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { selectedTask })(Todos);