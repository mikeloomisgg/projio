import React from 'react';
import ReactDOM from 'react-dom';

import Toolbar from '../toolbar/Toolbar';
import FootToolbar from '../foot_toolbar/FootToolbar';
import MainView from './ViewContainer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toolBarHeight = 50;
    this.footerHeight = 50;
  }

  render() {
    return (
      <div>
        <Toolbar toolBarHeight={this.toolBarHeight}/>
        <MainView />
        <FootToolbar footerHeight={this.footerHeight}/>
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
