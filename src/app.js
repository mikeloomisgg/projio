import React from 'react';
import ReactDOM from 'react-dom';

import AppMenuContainer from './app/containers/AppMenuContainer';
import TableContainer from './app/containers/TableContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <AppMenuContainer />
        <TableContainer />
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
