const data = [
  {
    id: 1,
    name: '張小草',
  },
  {
    id: 2,
    name: '陳小花',
  },
];

function Student() {
  return (
    <>
      <h1>學生資料範例(map)</h1>
      {/* {只有陣列可以呼叫map(map-> 為api)} */}
      {data.map((v, i) => {
        {
          /* {v代表每個物件的名詞} ; key->當你在建立一個 element 列表時必須使用的特殊的 string attribute*/
        }
        return <li key={v.id}>{v.name}</li>;
      })}
    </>
  );
}
export default Student;
