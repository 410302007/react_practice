import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <h1>會員登入範例</h1>
      <div>
        帳號:
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value); //執行的時間點比下方的console.log還慢
            //例如要和伺服器檢查
            console.log(username);
            console.log('e.target.value=', e.target.value);
          }}
        />
      </div>
      <div>
        密碼:
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            //例如要和伺服器檢查
            console.log(password.length);
            console.log('e.target.value=', e.target.value);
          }}
        />
        {password.length}
      </div>
      <button>登入</button>
    </>
  );
}
export default Login;
