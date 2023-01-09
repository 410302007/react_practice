import { useState } from 'react';

function Counter() {
  const [total, setTotal] = useState(0);
  return (
    <>
    <h1
      onClick={() => {
        setTotal(total + 1);
      }}
    >
      {total}
    </h1>
      {/* {前面的條件運算要轉為boolean，不要使用falsy 或 truthy判斷} */}
      {!!total && <p>目前total={total}</p>}
      {total >0 && <p>目前total={total}</p>}
      {total !== 0 && <p>目前total={total}</p>}
    </>
  );
}

export default Counter;
