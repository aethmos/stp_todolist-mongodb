import React, { Component } from 'react';
import CheckListItem from './components/CheckListItem.js'

class App extends Component {
  render() {
    return (
      <div>
        <CheckListItem description='Schere' state='done' />
        <CheckListItem description='Stein' state='' />
        <CheckListItem description='Papier' state='done' />
      </div>
    );
  }
}

export default App;
