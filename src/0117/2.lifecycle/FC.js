import { useState, useEffect } from 'react';

function FC() {
  const [total, setTotal] = useState(0);

  //模擬didMount
  //只會在網頁一出來時執行，接下來不再執行
  useEffect(() => {
    console.log('模擬componentDidMount');
  }, []); //空陣列代表不與任何state或props相依賴，只在元件render時執行
  return (
    <>
      <h1>函式型元件</h1>
      <h1
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        {total}
      </h1>
    </>
  );
}
export default FC;
