import React from 'react';
import TodoForm from '../components/TodoForm';

export default class TodoList extends React.Component {

  constructor() {
    super();
    this.state = {
      value: '',
      todoList: ['hola','chau']
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState({
      todoList: this.state.todoList.concat(this.state.value)
    });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    const todoList = this.state.todoList;
    const todos = todoList.map((todo, i) => {
      return (
        <li key={i}>{todo}</li>
      )
    });
    return (
      <div>
        <div>
          <TodoForm
            value={this.state.value}
            onSubmit={(event) => this.handleSubmit(event)}
            onChange={(event) => this.handleChange(event)}
          />
        </div>
        <div>{todos}</div>
      </div>
    )
  }
}