import { useState } from 'react';

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
];

function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              // 處理數量count屬性的增加
              const newProducts = products.map((v, i) => {
                if (v.id === product.id) {
                  return { ...v, count: v.count + 1 };
                } else {
                  return { ...v };
                }
              });
              setProducts(newProducts);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              //預期目前商品數量為1，再按下-按鈕，即刪除它
              if (product.count === 1) {
                //1 //2
                const newPeoducts = products.filter((v, i) => {
                  return v.id !== product.id;
                });
                //3
                setProducts(newPeoducts);

                return; //跳出函式，下面的程式碼不會再執行
              }
              // 處理數量count屬性的減少
              const newProducts = products.map((v, i) => {
                if (v.id === product.id) {
                  console.log(v.name, v.count, product.count);

                  return { ...v, count: v.count - 1 };
                } else {
                  return { ...v };
                }
              });

              setProducts(newProducts);
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
export default ShoppingCart;
