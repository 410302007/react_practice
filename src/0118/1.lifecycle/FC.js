import { useState, useEffect } from 'react'

function FC() {
  const [total, setTotal] = useState(0)

  const [user, setUser] = useState({ name: 'amy' })

  // 模擬didMount+didUpdate
  // 第一次render也會執行
  // useEffect(() => {
  //   console.log('模擬didMount+didUpdate', 'total=', total)
  // }, [total])

  useEffect(() => {
    if (user.name !== 'amy') {
      console.log('模擬didMount+didUpdate', 'user=', user)
    }
  }, [user])
  // ^^^^^^ 相依性陣列中放入陣列或物件，只要設定到state就一定會執行
  // 使用`Object.is`作比較

  return (
    <>
      <h1>函式型元件</h1>
      <h1>{user.name}</h1>
      <button
        onClick={() => {
          setUser({ name: 'amy' })
        }}
      >
        user to "name: 'amy'"
      </button>
      <button
        onClick={() => {
          setUser({ name: 'bob' })
        }}
      >
        user to "name: 'bob'"
      </button>

      {/* <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
      <button
        onClick={() => {
          setTotal(123)
        }}
      >
        total to 123
      </button>
      <button
        onClick={() => {
          setTotal(99)
        }}
      >
        total to 99
      </button> */}
    </>
  )
}

export default FC
