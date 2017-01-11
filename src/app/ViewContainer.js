import React from 'react';
import AltContainer from 'alt-container';

import Table from '../event_table/Table';

class ViewContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AltContainer>
        <Table height={this.props.height}/>
      </AltContainer>
    )
  }
}

export default ViewContainer
