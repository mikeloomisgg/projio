import React from 'react';
import AltContainer from 'alt-container';

import ToolbarStore from './ToolbarStore';
import ToolbarActions from './ToolbarActions';

class Toolbar extends React.Component {
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

class ToolbarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.ToolbarStore = ToolbarStore;
    ToolbarStore.state.toolBarHeight = this.props.toolBarHeight;
  }

  render() {

    return (
      <AltContainer
        store={this.ToolbarStore}
        actions={ToolbarActions}
      >
        <Toolbar />
      </AltContainer>

    )
  }
}

export {Toolbar}
export default ToolbarContainer;
