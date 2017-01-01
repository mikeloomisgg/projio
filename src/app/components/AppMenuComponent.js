import React from 'react';

var AppMenu = React.createClass({
  render() {
    return (
      <div>
        <div className="ui sticky fixed fluid inverted menu" style={{height: '50px'}}>
          <div className="ui simple dropdown item">
            Views <i className="dropdown icon"></i>
            <div className="menu">
              <a className="item" href="#">Actions</a>
              <a className="item" href="#">Resources</a>
            </div>
          </div>
        </div>
        <div className="ui container" style={{height: '50px'}}/>
      </div>
    );
  }
});

export default AppMenu;
