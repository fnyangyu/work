let scrtop = document.querySelectorAll(".chima a")
for (let i = 0; i < scrtop.length; i++) {
  scrtop[i].onclick = function(event){
    event.preventDefault()
    var a = document.querySelectorAll(".scrtoprighttopright p") 
    for (var j = 0; j < scrtop.length; j++) {
      a[j].style.display = "none"
      scrtop[j].style.border = "1px solid #ccc"
      }
    a[i].style.display = "block"
    scrtop[i].style.border = "2px solid #46c600"
  } 
}
document.querySelector("#box").onclick = function(){
  let unit = document.querySelector("#unit")
  unit.value++
  document.querySelector("#unit").value = unit.value
}
document.querySelector("#mis").onclick = function () {
  let unit = document.querySelector("#unit")
  let val = Number(unit.value)
  if (val > 1) {
    val--
  }
  document.querySelector("#unit").value = val
  
}
document.querySelector(".fenxiang").onmouseenter = function(){
  document.querySelector(".fenbg").style.display = "block"
}
document.querySelector(".fenxiang").onmouseleave = function () {
  document.querySelector(".fenbg").style.display = "none"
}
let scrmin = document.querySelectorAll(".scrmintop li")
let scrdown = document.querySelectorAll(".scrdown>div")
for (let i = 0; i < scrmin.length; i++) {
  scrmin[i].onclick = function(e){
    e.preventDefault()
    for (let j = 0; j < scrmin.length; j++) {
      scrmin[j].style.backgroundColor = "#ccc"
      scrmin[j].style.borderBottom = "#ccc"
      scrmin[j].style.borderBottom = "#ccc"
      scrdown[j].style.display = "none"
      console.log(j);
      
    }
    this.style.backgroundColor = "#fff"
    this.style.borderBottom = "#fff"
    scrdown[i].style.display = "block"
  }
  
}