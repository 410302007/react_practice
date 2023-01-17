import { useState } from 'react';
function EditForm({ text, updateTodo, id }) {
  //
  const [inputText, setInputText] = useState(text);
  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          updateTodo(id, inputText);
        }}
      >
        儲存
      </button>
    </>
  );
}
export default EditForm;
