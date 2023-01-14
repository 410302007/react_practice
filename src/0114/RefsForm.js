import { useRef } from 'react';

function RefsForm() {
  //對照getElementById， 如果沒找到會回傳null，預設值使用null
  const inputRef = useRef(null);

  //下面的useRef(null)呼叫後會回傳一個物件值`{current:null}`
  // console.log(inputRef) ->{current:null}
  //ref ={} 使用大括號
  return (
    <>
      <h1>RefsForm</h1>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          //使用時要用inputRef.current 代表得到的元素實體物件參照
          inputRef.current.focus();
        }}
      >
        聚焦focaus
      </button>
      <button
        onClick={() => {
          inputRef.current.blur();
        }}
      >
        失焦blur
      </button>
      <button
        onClick={() => {
          console.log(inputRef.current.value);
        }}
      >
        獲得值(console.log)
      </button>
    </>
  );
}

export default RefsForm;
