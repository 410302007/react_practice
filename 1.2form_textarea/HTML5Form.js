import { useState } from 'react';

function HTML5Form() {
  //input-text
  const [inputText, setInputText] = useState(''); //初始化為空白字串
  //textarea
  const [textareaText, setTextareaText] = useState('');
  return (
    <>
      <h1>可控的表單元件範例</h1>
      <section id="input-text">
        <h2>文字輸入框(input-text)</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
      </section>
      <section id="textarea">
        <h2>文字輸入區域(text)</h2>
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value);
          }}
        />
      </section>
    </>
  );
}

export default HTML5Form;
