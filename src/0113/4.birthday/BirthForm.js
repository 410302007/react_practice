import { useState } from 'react';

function BirthForm() {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  //產生選項的函式，給最小值+最大值(包含)， 回傳一個可以map用的陣列
  // 其它參考: https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
  // https://stackoverflow.com/questions/10451893/javascript-create-simple-dynamic-array
  const makeOptions = (min, max) => {
    const options = [];

    for (let i = min; i < max + 1; i++) {
      options.push(i);
    }
    return options;
  };

  return (
    <>
      <h1>出生年月日下拉選單 + 18歲驗證</h1>
      <div>
        <label>西元</label>
        <select
          value={year}
          onChange={(e) => {
            setYear(e.target.value);

            //為了避免再次選年或月，要先清空日的選擇state
            setDay('');
          }}
        >
          <option>-請選擇-</option>
          {makeOptions(1940, 2015).map((v, i) => {
            return (
              <option key={v} value={v}>
                {v}
              </option>
            );
          })}
        </select>
        年
        <select
          value={month}
          onChange={(e) => {
            setMonth(e.target.value);
            // 為了避免再次選年or月，要先清空日的選擇state
            setDay('');
          }}
        >
          <option>-請選擇-</option>
          {makeOptions(1, 12).map((v, i) => {
            return (
              <option key={v} value={v}>
                {v}
              </option>
            );
          })}
        </select>
        月
        <select
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        >
          <option>-請選擇-</option>
          {year !== '' && //年與月都有選到->才能產生日期
            month !== '' &&
            makeOptions(1, new Date(year, month, 0).getDate()).map((v, i) => {
              return (
                <option key={v} value={v}>
                  {v}
                </option>
              );
            })}
        </select>
        日
      </div>
      <br />
      <button
        onClick={() => {
          if (year === '' || month === '' || day === '') {
            alert('請完成年月日的完整選擇，才能進行驗證!');
            return;
          }
          //現在的微秒值
          const msNow = Number(new Date());
          // 使用者選的年月日微秒值
          const msUser = Number(new Date(`${year}/${month}/${day}`));

          // 18年的毫秒值 =  568036800000
          if (msNow - msUser >= 568036800000) {
            alert('滿18歲了!!!');
          } else {
            alert('未滿18歲');
          }
        }}
      >
        驗證
      </button>
      <p>滿18歲了嗎?</p>
    </>
  );
}
export default BirthForm;
