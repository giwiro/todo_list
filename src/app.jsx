import React from 'react';


class Todo extends React.Component {
    render() {
        return (
            <div>{this.props.value}</div>
        )
    }
}

class TodoForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <label>
                    To do:
                    <input type="text" name="todo" value={this.props.value} onChange={this.props.onChange}/>
                </label>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}

export default class App extends React.Component {

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
            todoList: todoList.concat(this.state.value)
        });
        event.preventDefault();
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({value: event.target.value});
    }

    render() {
        const todoList = this.state.todoList;
        const todos = todoList.map((todo) => {
            return (
                <li key={todo}>{todo}</li>
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