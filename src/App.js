import React, { Component } from 'react';
import './App.css';
import ListContainer from './components/ListContainer/ListContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listToAdd: '',
      lists: []
    };
  }

  onChange = (event) => {
      this.setState({
          listToAdd: event.target.value
      })
  }

  onSubmit = (event) => {
      event.preventDefault();
      this.setState({
          listToAdd: '',
          lists: [...this.state.lists, this.state.listToAdd]
      });
  }

  render() {
    return (
      <div>
        <ListContainer />
      </div>
    );
  }
}

export default App;
