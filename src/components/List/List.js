import React, {Component} from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      listItems: []
    }
  }

  onChange = (event) => {
    this.setState({
        item: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
        item: '',
        listItems: [...this.state.listItems, this.state.item]
    });
  }

  render() {
    return (
      <div className="list">
        <h2>{this.props.title}</h2>
        <form className="List" onSubmit={this.onSubmit}>
          <input value={this.state.item} onChange={this.onChange} />
          <button>Add Item</button>
        </form>
        <div className="itemContainer">
          {
            this.state.listItems.map((item, index) => <ListItem item={item} />)
          }
        </div>
      </div>
    )
  }
}

export default List;
