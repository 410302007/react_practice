import { useState } from 'react';

function Counter() {
  const [total, setTotal] = useState(0);

  //異步(非同步)
  // console.log('a');
  // setTimeout(() => {
  //   console.log('b');
  // }, 5000);    //等待5秒
  // console.log('c');

  return (
    <>
      <h1
        onClick={() => {
          const newTotal = total + 1;
          console.log('before call setTotal total =', total);
          setTotal(newTotal);
          console.log('after call setTotal total=', total);
        }}
      >
        {total}
      </h1>
    </>
  );
}

export default Counter;
