import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/container'

class App extends React.Component {
    render() {
        return (
          <AppContainer />
        );
    }
}

ReactDOM.render(
    <App/ >,
    document.getElementById('content')
);
