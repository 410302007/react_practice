function Child(props) {
  // 子女元件可透過props接收到由父母元件傳遞來的各種資料
  console.log(props); //text: "Hello你好"
  return (
    <>
      {props.text}
      <button onClick={props.foo}>按我</button>
    </>
  );
}

export default Child;
