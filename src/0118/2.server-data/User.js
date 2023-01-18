//需先安裝'yarn add axios'
import axios from 'axios';
import { useEffect, useState } from 'react';
import './User.css';
function User() {
  // [{
  //   "id": "107001",
  //   "name": "張佳蓉",
  //   "age": "22"
  // }]
  const [users, setUsers] = useState([]);

  //載入指示器用
  const [isLoading, setIsLoading] = useState(true); //一開始就載入

  //與伺服器相連獲得資料的函式
  const getUsers = async () => {
    try {
      const response = await axios.get(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
      );
      console.log(response.data); //-> 21位成員陣列

      //設定到state中
      //這裡要確保設定到state的資料類型是符合的
      //例如此處的陣列(若為陣列格式，設定進state; 不是陣列格式，不要設定進去)
      if (Array.isArray(response.data)) {
        setUsers(response.data);
      }

      /* 單純用fetch api*/
      /* ================================ */
      // const response = await fetch('https://my-json-server.typicode.com/eyesofkids/json-fake-data/users')
      //
      // const data = await response.json()
      //
      // if (Array.isArray(response.data)) {
      //   setUsers(data)
      // }
      //
      /* ============================== */
      /* 單純用fetch */
    } catch (e) {
      console.log(e);
    }
  };
  //didMount (已與伺服器相連，顯示在網頁上)
  useEffect(() => {
    //向伺服器要求資料
    getUsers();

    //設定兩秒後關閉載入指示動畫
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const loader = (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  const display = (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>年齡</th>
        </tr>
      </thead>
      <tbody>
        {users.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return (
    <>
      <h1>會員資料</h1>
      {isLoading ? loader : display}
    </>
  );
}
export default User;
