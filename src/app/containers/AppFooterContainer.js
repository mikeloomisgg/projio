import React from 'react';
import AltContainer from 'alt-container';

import AppFooterStore from '../stores/AppFooterStore';
import AppFooterActions from '../actions/AppFooterActions';
import AppFooterComponent from '../components/AppFooterComponent';

class AppFooterContainer extends React.Component {
  constructor(props) {
    super(props);

    this.AppFooterStore = AppFooterStore;
    AppFooterStore.state.footerHeight = this.props.footerHeight;
  }

  render() {

    return (
      <AltContainer
        store={this.AppFooterStore}
        actions={AppFooterActions}
      >
        <AppFooterComponent />
      </AltContainer>

    )
  }
}

export default AppFooterContainer
