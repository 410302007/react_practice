import { useState } from 'react';

function BMIForm() {
  const [inputHeight, setInputHeight] = useState(0);
  const [inputWeight, setInputWeight] = useState(0);
  const [myBMI, setMyBMI] = useState(0);

  return (
    <>
      <h1>身高質量指數(BMI)計算器</h1>

      <label>身高</label>
      <input
        type="number"
        name="inputHeight"
        value={inputHeight === 0 ? '' : inputHeight}
        onChange={(e) => {
          // 保持state的資料類型一致為number(與初始值相同)
          // 注意e.target.value為字串類型
          setInputHeight(Number(e.target.value));
        }}
      />
      <br />

      <label>體重</label>
      <input
        type="number"
        name="inputWeight"
        value={inputWeight === 0 ? '' : inputWeight}
        onChange={(e) => {
          // 保持state的資料類型一致為number(與初始值相同)
          // 注意e.target.value為字串類型
          setInputWeight(Number(e.target.value));
        }}
      />
      <br />
      <button
        onClick={() => {
          const bmi = inputWeight / Math.pow(inputHeight / 100, 2);
          setMyBMI(bmi);
        }}
      >
        計算
      </button>
      <button
        onClick={() => {
          setInputHeight(0);
          setInputWeight(0);
          setMyBMI(0);
        }}
      >
        清除
      </button>
      <hr />
      {/* toFixed為格式化數字使用，保留一位小數之後四捨五入 */}
      <p>你的BMI值為: {myBMI > 0 ? myBMI.toFixed(1) : ''}</p>
    </>
  );
}

export default BMIForm;
