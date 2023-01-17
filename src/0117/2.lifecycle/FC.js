import { useState, useEffect, useRef } from 'react';

function FC() {
  const [total, setTotal] = useState(0);

  //記憶進入didMount 時間點的變數
  //`{current:false}`
  const didMountRef = useRef(false);

  //模擬didMount
  useEffect(() => {
    console.log('模擬DidMount');
  }, []);
  // ^^空陣列代表不與任何state或props相依賴，中間的程式碼只在元件初次render時執行一次，之後就不再執行

  //模擬didUpdate
  //[]=> React.DepencyList (相依性陣列)
  useEffect(() => {
    console.log('模擬didMount+didUpdate', 'total=', total);
  }, [total]);
  // ^^^^^^^ 相依性陣列中，用於放入與"更新階段"有關的props(從父母元件來的)或state(自己本身的)
  //意義是當放入的state或props更動時，會執行第一參數函式中的程式碼(行為模式相似於onChange)
  //只有當從父母接收到新的props或本身的state有更動時，才會觸發更新(updating/ re-render)階段

  //只模擬didUpdate
  useEffect(() => {
    //略過初始值
    if (total !== 0) {
      console.log('模擬didUpdate-2', 'total=', total);
    }
  }, [total]);
  //完全模擬didUpdate
  useEffect(() => {
    if (didMountRef.current) {
      console.log('模擬didUpdate-3', 'total=', total);
    } else {
      didMountRef.current = true;
    }
  }, [total]);

  //模擬willUnmount
  useEffect(() => {
    return () => {
      console.log('模擬willUnmount');
    };
  }, []);

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
      {console.log('render')}
    </>
  );
}
export default FC;
