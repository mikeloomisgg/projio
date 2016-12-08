import React from 'react';
import ReactDOM from 'react-dom';

import CellContainer from './containers/CellContainer'

class App extends React.Component {
    render() {
        return (
          <CellContainer />
        );
    }
}

ReactDOM.render(
    <CellContainer />,
    document.getElementById('content')
);
