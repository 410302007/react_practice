import React from 'react';

//類別型元件
//繼承->extends
class CC extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
    console.log('constructor'); //1,先執行
  }
  //先做第一次呈現(render)，才會執行(componentDidMount)
  componentDidMount() {
    console.log('componentDidMount'); //3.最後執行
  }
  //先做第一次呈現(render)，元件已經更新完成，才會執行
  componentDidUpdate() {
    console.log('componentDidUpdate', 'total=', this.state.total);
  }
  //從dom結構裡元件完全被移除，才會呼叫
  //元件無法移除他自己，只有父母元件才可移除
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render'); //2.執行
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
