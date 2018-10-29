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

  addTodo(description, callback) {
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
      callback(null, res.data.data);
    });
  }

  updateTodo(idToUpdate, update, callback) {
    axios.put("/api", {
      id: idToUpdate,
      update: update,
    })
    .then((res) => {
      if (res.result === 'success') {
        callback(null);
      } else {
        callback(`Update failed of todo #${idToUpdate}.`);
      }
    });
  };

  deleteTodo(idToDelete) {
    axios.delete("/api", {
      data: {
        id: idToDelete
      }
    });
  }

  _handleTodoChange(id) {
    var data = this.state.data.slice(0);
    var obj = null;
    let idx;

    for (idx = 0; idx < data.length; idx++) {
      if (data[idx]._id === id) {
        obj = { ...data[idx] };
        break;
      }
    }

    obj.status = obj.status === 'TODO'
      ? 'DONE'
      : 'TODO';

    this.updateTodo(obj._id, { status: obj.status }, (err) => {
      if (err) console.log(err);

      data[idx] = obj;
      this.setState({ data: data });
    });
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter' && e.target.value.trim()) {
      
      // to access event inside callback
      e.persist();
      this.addTodo(e.target.value.trim(), (err, res) => {
        if (err) {
          console.log(err); return;
        }

        // update state
        let newData = this.state.data.splice(0);
        newData.push(res);
        this.setState({ data: newData });

        // reset input field
        e.target.value = '';
      });
    }
  }

  render() {

    return (
      <div>
        <CheckListMutable
          title='To Do'
          items={ this.state.data.filter(o => o.status === 'TODO') }
          handleTodoChange={ (id) => this._handleTodoChange(id) }
          handleKeyPress={ (e) => this._handleKeyPress(e) } />

        <CheckList
          title='Done'
          items={ this.state.data.filter(o => o.status === 'DONE')  }
          handleTodoChange={ (id) => this._handleTodoChange(id) } />
      </div>
    );
  }
}

export default App;
