import React, { Component } from 'react';
import { CheckList, CheckListMutable } from './components/CheckList';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('/api', { mode: 'cors' })
    .then(res => res.json())
    .then(
      (res) => {
        const newState = {
          data:  res.data
        };
        this.setState(newState);
      }
    )
    .catch(err => console.log(err));
  }

  addTodo(description) {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("/api", {
      id: idToBeAdded,
      description: description,
      status: "TODO"
    })
    .then((res) => {
      // handle success

      console.log(res.data);
    });
  }

  updateTodo(idToUpdate, update) {
    axios.put("/api", {
      id: idToUpdate,
      update: { description: update.description, status: update.status }
    });
  };

  deleteTodo(idToDelete) {
    axios.delete("/api", {
      data: {
        id: idToDelete
      }
    });
  }

  handleTodoChange(id) {
    let data = this.state.data.slice(0);
    let obj = null;
    let idx;

    for (idx = 0; idx < data.length; idx++) {
      if (data[idx]._id === id) {
        obj = {...data[idx] };
        break;
      }
    }

    obj.status = obj.status === 'TODO'
      ? 'DONE'
      : 'TODO';
    axios.put('/api', {
      id: id,
      update: { status: obj.status } })
    .then(res => {
      if (res.data.success === true) {
        data[idx] = obj;
        this.setState({ data: data });
      }
    });
  }

  render() {

    return (
      <div>
        <CheckListMutable
          title='To Do'
          items={ this.state.data.filter(o => o.status === 'TODO') }
          handleTodoChange={ (id) => this.handleTodoChange(id) } />

        <CheckList
          title='Done'
          items={ this.state.data.filter(o => o.status === 'DONE')  }
          handleTodoChange={ (id) => this.handleTodoChange(id) } />
      </div>
    );
  }
}

export default App;
