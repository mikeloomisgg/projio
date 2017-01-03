import React from 'react';

class AppMenuComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="ui fixed top sticky fluid inverted menu" style={{height: this.props.toolBarHeight + 'px'}}>
          <div className="ui simple dropdown item">
            Views <i className="dropdown icon"></i>
            <div className="menu">
              <a className="item" href="#">Actions</a>
              <a className="item" href="#">Resources</a>
            </div>
          </div>
        </div>
        <div className="ui container" style={{height: this.props.toolBarHeight + 'px'}}/>
      </div>
    );
  }
}

export default AppMenuComponent;
