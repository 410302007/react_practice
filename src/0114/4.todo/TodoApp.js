import { useState } from 'react';

function TodoApp() {
  //文字輸入框用
  const [inputText, setInputText] = useState('');

  const [todos, setTodos] = useState([
    { id: 1, text: '買iPhone' },
    { id: 2, text: '寫作業' },
  ]);

  return (
    <>
      <h1>待辦事項</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            //新增的物件  //參考0110/5.p/Exam2
            const newTodo = { id: Number(new Date()), text: e.target.value };

            // 共通三步驟
            // 1. 從目前的狀態拷貝(ps.深拷貝/完全拷貝)出一個新的變數值(陣列/物件)
            // 2. 在新的變數值(陣列/物件)上作處理
            // 3. 設定回原本的狀態中

            //1 & 2
            const newTodos = [newTodo, ...todos];
            //3.
            setTodos(newTodos);
            //清空文字輸入框
            setInputText('');
          }
        }}
      />
      <hr />
      <ul>
        {/* 不可用索引值當key，索引值在執行過程中會因為新增、刪除而改變 */}
        {todos.map((v, i) => {
          return <li key={v.id}>{v.text}</li>;
        })}
      </ul>
    </>
  );
}

export default TodoApp;
