import React from 'react';

class AppFooterComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="ui fixed bottom sticky fluid inverted menu" style={{height: this.props.footerHeight + 'px'}}>
        </div>
        <div className="ui container" style={{height: this.props.footerHeight + 'px'}}/>
      </div>
    );
  }
}

export default AppFooterComponent;
