var React = require('react');
var ItemsList = require('./items-list');

var TodoList = React.createClass({
  getInitialState: function() {
    return {
      items: ["groceries", "bills"]
    }
  },

  addItem: function() {
    var newItem = this.refs.input.getDOMNode().value;
    var existingList = this.state.items;
    existingList.push(newItem);

    this.setState({
      items: existingList
    });
  },

  render: function() {
    return (
      <div>
        <h3>Todo</h3>
        <ItemsList items={this.state.items} />
        <input type="text" ref="input"/>
        <button type="submit" onClick={this.addItem} >Add</button>
      </div>
    );
  }
});

module.exports = TodoList;