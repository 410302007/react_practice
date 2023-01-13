import { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

function Parent() {
  // 父母中的內部資料
  const [pData, setPData] = useState('parent data');
  //準備接收來自子女B的資料
  const [dataFromChild, setDataFromChild] = useState('');
  return (
    <>
      <h1>Parent</h1>

      <ChildA dataFromChild={dataFromChild} />
      {/* 給子女B可以設定state的函式 */}
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  );
}

export default Parent;
