import { useEffect, useState } from 'react';

function Counter() {
  const [total, setTotal] = useState(0);

  // const [totalTwo, setTotalTwo] = useState(total + 1); //只能作為初始化用，一開始只會執行一次，之後並不會再呼叫

  const [totalTwo, setTotalTwo] = useState(0);
  const [totalThree, setTotalThree] = useState(0);

  //異步(非同步)
  // console.log('a');
  // setTimeout(() => {
  //   console.log('b');
  // }, 5000);    //等待5秒
  // console.log('c');

  //批次改變
  //1->2->3
  useEffect(() => {
    setTotalTwo(total + 1);
  }, [total]);
  useEffect(() => {
    setTotalThree(totalTwo + 1);
  }, [totalTwo]);

  return (
    <>
      {/* <h1
        onClick={() => {
          const newTotal = total + 1;
          console.log('before call setTotal total =', total);
          setTotal(newTotal);
          console.log('after call setTotal total=', total);
        }}
      >
        {total}
      </h1> */}
      <h1
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        {total}
      </h1>
      <h1>{totalTwo}</h1>
      <h1>{totalThree}</h1>
    </>
  );
}

export default Counter;
