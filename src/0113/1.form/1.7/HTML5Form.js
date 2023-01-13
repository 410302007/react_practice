import { useState } from 'react';

function HTML5Form() {
  //input-text
  const [inputText, setInputText] = useState(''); //初始化為空白字串

  //textarea
  const [textareaText, setTextareaText] = useState('');

  //radio-group
  // state中記錄使用者選了單一值
  const [food, setFood] = useState('');
  const foodOptions = ['雞腿飯', '排骨飯', '舒肥雞', '健康餐盒'];

  //checkbox one
  const [agree, setAgree] = useState(false);

  //checkbox group
  //state中要記錄使用者選了哪幾個值(複選)
  const [likeList, setLikeList] = useState([]); //可能選了芒果跟香蕉，至少要是個陣列
  const fruitOptions = ['芒果', '香蕉'];

  //checkbox group -2

  const petOptions = ['貓', '狗', '兔'];
  //state中要記錄個選項的物件
  // [ {id:1, value:'貓', checked:false} ,...]
  const [pets, setPets] = useState(
    petOptions.map((v, i) => {
      return { id: i, value: v, checked: false }; // false->代表被選中
    })
  );
  //
  const cityOptions = ['台北市', '台中市', '台南市'];
  const [city, setCity] = useState('');

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
      <section id="radio-group">
        <h2>選項按鈕(radio-group)</h2>
        {foodOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="radio"
                value={v}
                // 布林值，代表目前是否有被使用者選中
                checked={food === v}
                onChange={(e) => {
                  setFood(e.target.value);
                }}
              />
              <label>{v}</label>
            </div>
          );
        })}
      </section>
      <section id="checkbox-one">
        <h2>核取方塊(單一)</h2>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        <label>我已閱讀並同意消費者....</label>
      </section>
      <section id="checkbox-group">
        <h2>核取方塊(群組)(checkbox-group)</h2>
        {fruitOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                value={v}
                checked={likeList.includes(v)}
                onChange={(e) => {
                  const targetValue = e.target.value;
                  //先判斷是否有在state陣列(likeList)中
                  if (likeList.includes(targetValue)) {
                    //如果有在state陣列中 -> 從state陣列移除
                    //從陣列刪除這值 = 相當於回傳一個新陣列中不包含這值
                    const newLikeList = likeList.filter((v2, i2) => {
                      return v2 !== targetValue; //e.target.value-> 目前觸發的checkbox
                    });
                    setLikeList(newLikeList);
                  } else {
                    //若沒有在state陣列中-> 加入到state陣列中
                    const newLikeList = [...likeList, targetValue];
                    setLikeList(newLikeList);
                  }
                }}
              />
              <label>{v}</label>
            </div>
          );
        })}
      </section>
      <section id="checkbox-group">
        <h2>核取方塊(群組)(checkbox-group-2)</h2>
        {pets.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                value={v.value}
                checked={v.checked}
                onChange={(e) => {
                  const newPets = pets.map((v2, i2) => {
                    if (v2.id === i) return { ...v2, checked: !v2.checked };
                    return { ...v2 };
                  });
                  setPets(newPets);
                }}
              />
              <label>{v.value}</label>
            </div>
          );
        })}
      </section>
      <section id="select">
        <h2>下拉清單(select)</h2>
        <select
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        >
          <option value="">--請選擇城市--</option>
          {cityOptions.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            );
          })}
        </select>
      </section>
    </>
  );
}
export default HTML5Form;
