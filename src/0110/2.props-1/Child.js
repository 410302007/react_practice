//在函式傳入值時就解構再使用
//也可設入props的預設值
function Child({
  text = 'hello',
  color = 'red',
  foo = () => {
    alert('test');
  },
}) {
  return (
    <>
      <div>文字:{text}</div>
      <div>顏色:{color}</div>
      <button onClick={foo}>按我</button>
    </>
  );
}

export default Child;
