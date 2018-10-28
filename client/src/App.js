import React, { Component } from 'react';
import CheckList from './components/CheckList'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      done: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api', { mode: 'cors' })
    .then(res => res.json())
    .then(
      (res) => {
        const newState = {
          todos: res.data.filter(o => o.status === 'TODO'),
          done:  res.data.filter(o => o.status === 'DONE')
        };
        this.setState(newState);
      }
    )
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <CheckList
          title='ToDo'
          items={ this.state.todos }

        <CheckList
          title='Erledigt'
          items={ this.state.done }
      </div>
    );
  }
}

export default App;
