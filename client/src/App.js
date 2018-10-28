import React, { Component } from 'react';
import CheckList from './components/CheckList';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api', { mode: 'cors' })
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
      let objIdToUpdate = null;
      this.state.data.forEach(dat => {
        if (dat.id === idToUpdate) {
          objIdToUpdate = dat._id;
        }
      });
  
      axios.put("/api", {
        id: objIdToUpdate,
        update: { description: update.description, status: update.status }
      });
  };

  deleteTodo(idToDelete) {
    let objIdToDelete = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToDelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete("/api", {
      data: {
        id: objIdToDelete
      }
    });
  }

  handleTodoChange(id) {
    console.log('change!');

    const data = this.state.data;
    let obj = null;
    let idx;
    for (idx = 0; idx < data.length; idx++) {
      if (data[idx].id === id) {
        obj = data[idx];
        break;
      }
    }

    obj.status = obj.status === 'TODO'
      ? 'DONE'
      : 'TODO';
    data[idx] = obj;
    this.setState({ data: data });

    this.updateTodo(data[idx].id, data[idx]);
  }

  render() {

    return (
      <div>
        <CheckList
          title='ToDo'
          items={ this.state.data.filter(o => o.status === 'TODO') }
          handleTodoChange={ (id) => this.handleTodoChange(id) } />

        <CheckList
          title='Erledigt'
          items={ this.state.data.filter(o => o.status === 'DONE')  }
          handleTodoChange={ (id) => this.handleTodoChange(id) } />
      </div>
    );
  }
}

export default App;
