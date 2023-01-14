import { useState } from 'react';

function MultipleInput() {
  //1. 保持state在應用程式執行過程中，資料類型一致
  //2. 當使用物作為state時，初始值的選擇，盡可能'不要'用空物件 或null
  //3. 物件中的初始值中使用表單元素的名稱作為屬性名
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    username: '',
    password1: '',
    password2: '',
  });
  return (
    <>
      <h1>多個表單輸入共用處理函式</h1>
      <div>
        <label>姓名:</label>
        <input type="text" name="fullname" />
      </div>
      <br />
      <div>
        <label>信箱:</label>
        <input type="email" name="email" />
      </div>
      <br />
      <div>
        <label>帳號:</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label>密碼:</label>
        <input type="password" name="password1" />
      </div>
      <div>
        <label>確認密碼:</label>
        <input type="password" name="password2" />
      </div>
    </>
  );
}
export default MultipleInput;
