import React from 'react';

export default class TodoForm extends React.Component {
  constructor() {
    super();
  }

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
