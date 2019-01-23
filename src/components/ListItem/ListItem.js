import React, {Component} from 'react';
import './ListItem.css';

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false
    }
  }

  onClick = (event) => {
    console.log("Hi!")
    this.setState({
      completed: !this.state.completed
    })
  }

  render() {
    return (
      <div className='item'>
        <p className = {this.state.completed ? 'finished' : 'unfinished'}>{this.props.item}</p>
        <input type='checkbox' onClick={this.onClick}/>
      </div>
    )
  }
}

export default ListItem;
