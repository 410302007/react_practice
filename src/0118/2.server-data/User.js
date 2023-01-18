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

  //與伺服器相連獲得資料的函式
  const getUsers = async () => {
    const response = await axios.get(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    );
    // console.log(response.data); -> 21位成員陣列

    //設定到state中
    setUsers(response.data);
  };
  //didMount (已與伺服器相連，顯示在網頁上)
  useEffect(() => {
    //向伺服器要求資料
    getUsers();
  }, []);

  return (
    <>
      <h1>會員資料</h1>
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
              <tr>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default User;
