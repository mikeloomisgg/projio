import React from 'react';
import AltContainer from 'alt-container';

import FootToolbarStore from './FootToolbarStore';
import FootToolbarActions from './FootToolbarActions';

class FootToolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="ui fixed bottom sticky fluid inverted menu" style={{height: this.props.footerHeight + 'px'}}>
        </div>
        <div className="ui container" style={{height: this.props.footerHeight + 'px'}}/>
      </div>
    );
  }
}

class FootToolbarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.FootToolbarStore = FootToolbarStore;
    FootToolbarStore.state.footerHeight = this.props.footerHeight;
  }

  render() {

    return (
      <AltContainer
        store={this.FootToolbarStore}
        actions={FootToolbarActions}
      >
        <FootToolbar />
      </AltContainer>

    )
  }
}

export {FootToolbar}
export default FootToolbarContainer
