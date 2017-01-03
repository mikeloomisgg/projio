import React from 'react';
import AltContainer from 'alt-container';

import TableContainer from './TableContainer';

class AppViewContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AltContainer>
        <TableContainer height={this.props.height}/>
      </AltContainer>
    )
  }
}

export default AppViewContainer
