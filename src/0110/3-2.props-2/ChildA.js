function ChildA(props) {
  return (
    <>
      <h1>Child-A</h1>
      <p>來自子女B的資料: {props.dataFromChild}</p>
    </>
  );
}

export default ChildA;
