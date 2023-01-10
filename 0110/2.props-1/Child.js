function Child(props) {
  //先解構
  const { text, color, foo } = props;
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
