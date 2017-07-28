import React, { Component } from 'react';
import { connect } from 'react-redux';

class TaskDetail extends Component {
  render() {
    if (this.props.todos === null) return null;
    return (
      <div>
        <h1>{this.props.todos.id}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.selectedTask
  };
};

export default connect(mapStateToProps)(TaskDetail);