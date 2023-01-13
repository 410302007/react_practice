import { useState } from 'react';

function Exchange() {
  //保持state的資料類型， 在應用程式執行過程中一致
  const [inputTWD, setInputTWD] = useState(0);
  const [inputUSD, setInputUSD] = useState(0);

  const convertUSD2TWD = (money) => {
    return (money * 30.38).toFixed(2); //求小數點後兩位
  };
  const convertTWD2USD = (money) => {
    return (money / 30.38).toFixed(2); //求小數點後兩位
  };

  return (
    <>
      <h1>貨幣轉換</h1>
      <div>
        <input
          type="number"
          value={inputTWD === 0 ? '' : inputTWD} //預設為空值
          onChange={(e) => {
            //因e.target.value必為字串值，為保持state資料類型一致要先轉換再設定
            const newInputTWD = Number(e.target.value);
            setInputTWD(newInputTWD);
            setInputUSD(convertTWD2USD(newInputTWD));
          }}
        />
        <label>新台幣</label>
      </div>
      <br></br>
      <div>
        <input
          type="number"
          value={inputUSD === 0 ? '' : inputUSD}
          onChange={(e) => {
            const newInputUSD = Number(e.target.value);
            setInputUSD(newInputUSD);
            setInputTWD(convertUSD2TWD(newInputUSD));
          }}
        />
        <label>美金</label>
      </div>
    </>
  );
}

export default Exchange;
