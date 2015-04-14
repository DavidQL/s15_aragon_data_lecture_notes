var React = require('react');

var ItemsList = React.createClass({

  render: function() {
    var itemsList = this.props.items.map(function(item) {
      return <li>{item}</li>;
    });

    return (
      <div>
        {itemsList}
      </div>
    );
  }
});

module.exports = ItemsList;