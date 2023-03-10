import { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

function Parent() {
  // 父母中的內部資料
  const [pData, setPData] = useState('parent data');
  return (
    <>
      <h1>Parent</h1>
      <ChildA pData={pData} />
      <ChildB />
    </>
  );
}

export default Parent;
