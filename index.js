console.log(
  document.getElementById("total").innerText
)
document.getElementById("total").addEventListener('click', function(){
  document.getElementById("total").innerText = Number(document.getElementById("total").innerText) + 1   //右邊運算完給左邊
})


