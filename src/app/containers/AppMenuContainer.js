import React from 'react';
import AltContainer from 'alt-container';

import AppMenuStore from '../stores/AppMenuStore';
import AppMenuActions from '../actions/AppMenuActions';
import AppMenu from '../components/AppMenuComponent';

var AppMenuContainer = React.createClass({
  render() {
    return (
      <AltContainer
        store={AppMenuStore}
        actions={AppMenuActions}
      >
        <AppMenu />
      </AltContainer>

    )
  }
})

export default AppMenuContainer
