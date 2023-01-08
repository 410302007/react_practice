import { useState } from 'react';

function App() {
  //宣告狀態用語法
  const [total, setTotal] = useState(0); //0->初始值; total->得到狀態用; setTotal->設定狀態用
  return (
    //return 相當於 render //react不使用id
    <>
      <h1
        onClick={() => {
          //setTotal(total++) -> 不可使用total ++，因相當於total+=1
          setTotal(total + 1);
        }}
      >
        {total}
      </h1>
    </>
  );
}

export default App;
