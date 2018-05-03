window.onscroll = function () {
  let sortop = document.querySelector("html").scrollTop
  if (sortop >= 2000) {
    document.querySelector(".right").style.display = "block"
  } else {
    document.querySelector(".right").style.display = "none"
  }
}

document.querySelector(".rightdown").onclick = function () {
  let scrtop = document.querySelector("html").scrollTop

  function fun1() {
    scrtop -= 100
    document.querySelector("html").scrollTop = scrtop
    if (scrtop > 0) {
      requestAnimationFrame(fun1)
    }
  }
  requestAnimationFrame(fun1)
}