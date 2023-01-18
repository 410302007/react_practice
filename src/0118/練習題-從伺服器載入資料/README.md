# 說明

## 操作

1. 以表格呈現所有資料
2. 加入載入指示動畫
3. 搜尋功能
4. 分頁功能

## 伺服器資料存取方式說明

以下所有的回應資料均為 json 格式的物件/陣列

### 得到所有資料

- https://my-json-server.typicode.com/eyesofkids/json-fake-data/users

### 得到單一筆資料(用 id 在網址上當參數)

`id` 為 `107001`

- https://my-json-server.typicode.com/eyesofkids/json-fake-data/users/107001

### 以姓名查詢

- 查詢姓名中有`陳`: `/users?name_like=陳`

### 以年齡查詢(大於或小於)

> 註: 回應的 json 為物件陣列

- 大於等於 20 歲: `/users?age_gte=20`
- 小於等於 20 歲:`/users?age_lte=20`
