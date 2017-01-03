import React from 'react';
import AltContainer from 'alt-container';

import AppMenuStore from '../stores/AppMenuStore';
import AppMenuActions from '../actions/AppMenuActions';
import AppMenuComponent from '../components/AppMenuComponent';

class AppMenuContainer extends React.Component {
  constructor(props) {
    super(props);

    this.AppMenuStore = AppMenuStore;
    AppMenuStore.state.toolBarHeight = this.props.toolBarHeight;
  }

  render() {

    return (
      <AltContainer
        store={this.AppMenuStore}
        actions={AppMenuActions}
      >
        <AppMenuComponent />
      </AltContainer>

    )
  }
}

export default AppMenuContainer
