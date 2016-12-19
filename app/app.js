import React from 'react';
import ReactDOM from 'react-dom';

var TableContainer = require('./containers/TableContainer');

class App extends React.Component {
    render() {
        return (
          <TableContainer />
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
