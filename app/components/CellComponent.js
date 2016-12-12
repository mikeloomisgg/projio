import React from 'react';

var Cell = React.createClass({
  render() {
    var className = "";
    if(this.props.isSelected) {
      className = "ui blue segment";
    } else {
      className = "ui segment";
    }

    if(true) {
      return (
        <td>
          <div className="ui fluid transparent input">
            <input type="text" defaultValue={this.props.value}/>
          </div>
        </td>
      );
    } else {
      return (
        <td>
          {this.props.value}
        </td>
      );
    }
  }
});

module.exports = Cell;
