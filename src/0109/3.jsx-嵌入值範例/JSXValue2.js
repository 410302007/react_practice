function JSXValue2() {
  return (
    <>
      <h1>JSX中值與表達式範例</h1>
      <h2>Number</h2>
      {123 - 99}
      {NaN}
      <h2>String</h2>
      {'hello'}
      {/* {/樣板字串語法} */}
      {`total=${100 - 5}`}
      {/* {boolean值最為重要->不會呈現在頁面} */}
      <h2>Boolean</h2>
      {/* {虛擬Dom 轉換成真實Dom-> render時，boolean值不會呈現} */}
      {true}
      {false}
      <h2>null</h2>
      {null}
      <h2>undefined</h2>
      {/* {render時不呈現} */}
      {undefined}
      <h2>Array</h2>
      {[1, 2, 3, 'a']}
      {[1, 2, 3, 'a'].join('')}

      <h2>Object</h2>
      {/* {會造中斷連線，不能直接呈現物件} */}
      {/* {{a:1, b:2}} */}
      <h2>Function</h2>
      {/* {檢查->有警告，不呈現任何東西} */}
      {() => {}}
    </>
  );
}
export default JSXValue2;
