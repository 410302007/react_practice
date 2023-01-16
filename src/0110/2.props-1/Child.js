//此用法較常用
//在函式傳入值時就解構再使用
function Child({
  text = 'hello',
  color = 'red',
  foo = () => {
    alert('test');
  },
}) {
  //先解構再使用
  // function Child(props){const { text, color, foo } = props;
  // 子女元件可透過props接收到由父母元件傳遞來的各種資料
  // console.log(props); //text: "Hello你好"
  return (
    <>
      <div>文字:{text}</div>
      <div>顏色:{color}</div>
      <button onClick={foo}>按我</button>
    </>
  );
}

export default Child;
