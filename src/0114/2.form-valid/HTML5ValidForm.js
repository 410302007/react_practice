import { useState } from 'react';

function HTML5ValidForm() {
  //1. 保持state在應用程式執行過程中，資料類型一致
  //2. 當使用物作為state時，初始值的選擇，盡可能'不要'用空物件 或null
  //3. 物件中的初始值中使用表單元素的名稱作為屬性名
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    username: '',
    password1: '',
    password2: '',
    showPassword: false,
  });
  //處理每個欄位的變動
  const handleFieldChange = (e) => {
    //可利用下面三哦觸發事件的東西來做進一步處理
    // console.log(e.target.type, e.target.name, e.target.value);

    //只針對checkbox(showPassword)使用
    if (e.target.name === 'showPassword') {
      setUser({ ...user, showPassword: e.target.checked });
      return; //!!注意: 這裡跳出函式執行 (沒有跳出，會繼續執行)
    }

    //以下要依照通用的三步驟原則來更新狀態
    setUser({ ...user, [e.target.name]: e.target.value }); //ex: email:e.target.value...
  };

  return (
    <>
      <h1>HTML5表單</h1>
      {/* 要在form表單標記中才能使用HTML5表單驗證 */}
      <form>
        <div>
          <label>姓名:</label>
          <input
            type="text"
            name="fullname"
            value={user.fullname}
            onChange={handleFieldChange}
            //加入必填屬性
            required
          />
        </div>
        <br />
        <div>
          <label>信箱:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleFieldChange}
            required
          />
          <button type="button">檢查此信箱是否已註冊過</button>
        </div>
        <br />
        <div>
          <label>帳號:</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleFieldChange}
            required
          />
        </div>
        <div>
          <label>密碼:</label>
          <input
            // 用showPassword的布林值來切換文字輸入框類型
            type={user.showPassword ? 'text' : 'password'}
            name="password1"
            value={user.password1}
            onChange={handleFieldChange}
            required
            minLength={6} //最少輸入6字元
            maxLength={10} //最多輸入10字元
          />
        </div>
        <div>
          <label>確認密碼:</label>
          <input
            type={user.showPassword ? 'text' : 'password'}
            name="password2"
            value={user.password2}
            onChange={handleFieldChange}
          />
          <br />
          <input
            type="checkbox"
            name="showPassword"
            checked={user.showPassword}
            onChange={handleFieldChange}
          />
          顯示輸入的密碼
        </div>
        {/* 在form標記中加入button，建議寫上type，因為沒加註type相當於submit */}
        <button type="submit">提交</button>
      </form>
    </>
  );
}
export default HTML5ValidForm;
