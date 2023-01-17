import { useState } from 'react';
// import CC from './CC';
import FC from './FC';
function Main() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? '移除' : '呈現'}
      </button>
      <hr />
      {show && <FC />}
    </>
  );
}
export default Main;
