import Child from './Child'; //渲染子女前，要先將子女引進

function Parent() {
  return (
    <>
      <Child />
    </>
  );
}

export default Parent;
