import React from 'react';
import AltContainer from 'alt-container';

import TableStore from '../stores/TableStore';
import TableActions from '../actions/TableActions';
import Row from '../components/RowComponent';
import Cell from '../components/CellComponent';
import Table from '../components/TableComponent';

var TableContainer = React.createClass({
  render() {
    return (
      <AltContainer
        store={TableStore}
        actions={TableActions}
      >
        <Table />
      </AltContainer>

    )
  }
})

export default TableContainer
