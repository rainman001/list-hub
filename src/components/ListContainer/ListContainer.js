import React, { Component } from 'react';
import './ListContainer.css';
import List from '../List/List';

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: '',
      lists: []
    }
  }

  onChange = (event) => {
    this.setState({
        list: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
        list: '',
        lists: [...this.state.lists, this.state.list]
    });
  }

  render() {
    return (
      <div>
        <form className="header" onSubmit={this.onSubmit}>
          <input value={this.state.list} onChange={this.onChange} />
          <button>Add List</button>
        </form>
        <div className='mainContainer'>
          {
            this.state.lists.map((item, index) => <List key={index} title={item}/>)
          }
        </div>
      </div>
    );
  }
}

export default ListContainer;
