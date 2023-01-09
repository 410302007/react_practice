constant variable -> const

variable -> let / const

immutable object 不可變物件-> 當物件被創造出來，他的狀態(成員變數與屬性的值)就不可改變-> 狀態為只讀不寫 

使用map才需要使用key ; 其他情況不要使用key

JSX語法:
  1. || 邏輯或 / && 邏輯與
  2. || (OR)-> false;  &&(AND)-> true
    (1) 0 || '' || false || NaN || [] || null ||    undefined =>[](為真) 
        -> 使用falsy判斷(短路求值，從左到右判斷)，求到真就結束
    (2)1 && [] && 'abc' && {} && null && true ||undefined => undefined
  3. if/ if, else無法使用於語法中

----------------------
setState -> 1.唯⼀能更動 State(狀態) 的⽅法
            2. 更動網⾴上的UI -> State(狀態) 需要被改變 -> 要呼叫 setState ⽅法
            3.ex: <h1 onClick={() => setState(total +1)}>{total}></h1>