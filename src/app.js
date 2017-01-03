import React from 'react';
import ReactDOM from 'react-dom';

import AppMenuContainer from './app/containers/AppMenuContainer';
import AppFooterContainer from './app/containers/AppFooterContainer';
import ViewContainer from './app/containers/ViewContainer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toolBarHeight = 50;
    this.footerHeight = 50;
  }

  render() {
    return (
      <div>
        <AppMenuContainer toolBarHeight={this.toolBarHeight}/>
        <ViewContainer height={this.viewHeight}/>
        <AppFooterContainer footerHeight={this.footerHeight}/>
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
