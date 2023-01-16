import { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

function Parent() {
  //父母內部無資料，子女b將自己內部資料給父母，父母再傳給子女A

  //準備接收來自子女B的資料
  const [dataFromChild, setDataFromChild] = useState('');
  return (
    <>
      <h1>Parent</h1>
      {/* 給子女A可以設定state的props */}
      <ChildA dataFromChild={dataFromChild} />
      {/* 給子女B可以設定state的函式 */}
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  );
}

export default Parent;
