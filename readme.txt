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


----------------------
props:
  1.三種基本關係:(參考3.props-2 & 3-1.props-2 & 3-2.props-2)
    (1).Parent 傳送資料給Child (單向資料流)
    (2).子女元件可透過props接收到由父母元件傳遞來的各種資料 (c->p)
    (3).子女-> 利用父母元件 及前面兩種方式(參考: 3-2.props-2)
  2.父母的屬性對子女來說是唯讀的(子女不能修改從父母元件得到的props屬性值)


----------------------
補充:
  (專題): 訂單編號: uuid  OR nanoid OR 資料庫
  !! typeof null -> object
  1. ref / key => 不屬於props
     ref 藉由 forwardRef 傳送  
  2.button type-> 預設為submit (送出)
  3.input type='file' 檔案(不可控) 

----------------------
truthy/ falsy :
 **falsy-> 強制轉型為boolean值，回傳false:
           1.false  2.""  3. 0  4. -0  
           5.NaN  6.null  7.undefined

