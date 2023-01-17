import React from 'react';

//類別型元件
//繼承->extends
class CC extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
  }
  render() {
    return (
      <>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 });
          }}
        >
          {this.state.total}
        </h1>
      </>
    );
  }
}

export default CC;
