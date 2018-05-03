  document.querySelector(".cust").onmouseenter = function() {
      document.querySelector(".custom").style.display = "block"
  }
  document.querySelector(".cust").onmouseleave = function() {
      document.querySelector(".custom").style.display = "none"
  }
  var obj = document.querySelectorAll(".banner a")
  var imgobj = document.querySelectorAll(".banner img")
  var num = 0
  let t = null
  t = function fun() {
      num++
      if (num == 5) {
          num = 0
      }
      for (var i = 0; i < 5; i++) {
          imgobj[i].style.opacity = 0
          obj[i].style.backgroundColor = '#ccc'
      }
      imgobj[num].style.opacity = 1
      obj[num].style.backgroundColor = 'red'
  }

  setTimeout(t, 2000)
  document.querySelector(".banner").onmouseenter = function() {
      document.querySelector(".bannerleft").style.opacity = 1
      document.querySelector(".bannerright").style.opacity = 1
      clearTimeout(t)
  }
  document.querySelector(".banner").onmouseleave = function() {
      document.querySelector(".bannerleft").style.opacity = 0
      document.querySelector(".bannerright").style.opacity = 0
      setTimeout(t, 1000)
  }
  for (let i = num; i < obj.length; i++) {
      obj[i].onclick = function(event) {
          event.preventDefault()
          for (var j = 0; j < obj.length; j++) {
              obj[j].style.backgroundColor = "#ccc"
              imgobj[j].style.opacity = 0
          }
          num = i
          obj[i].style.backgroundColor = "red"
          imgobj[i].style.opacity = 1
      }
  }
  document.querySelector(".bannerleft").onclick = function() {
      num--
      if (num == -1) {
          num = 4
      }
      for (var i = 0; i < 5; i++) {
          imgobj[i].style.opacity = 0
          obj[i].style.backgroundColor = '#ccc'
      }
      imgobj[num].style.opacity = 1
      obj[num].style.backgroundColor = 'red'
  }
  document.querySelector(".bannerright").onclick = function() {
      num++
      if (num === 5) {
          num = 0
      }
      for (var i = 0; i < 5; i++) {
          imgobj[i].style.opacity = 0
          obj[i].style.backgroundColor = '#ccc'
      }
      imgobj[num].style.opacity = 1
      obj[num].style.backgroundColor = 'red'
  }
  document.querySelector(".righttop").onmouseenter = function() {
      document.querySelector(".righttopblock").style.opacity = 1
      document.querySelector(".righttop img").style.marginTop = '-0px'
  }
  document.querySelector(".righttop").onmouseleave = function() {
      document.querySelector(".righttopblock").style.opacity = 0
      document.querySelector(".righttop img").style.marginTop = '-72px'
  }
  // setInterval(fun,1000)
  window.onscroll = function() {
      let sortop = document.querySelector("html").scrollTop
      if (sortop >= 2000) {
          document.querySelector(".right").style.display = "block"
      } else {
          document.querySelector(".right").style.display = "none"
      }
  }

  document.querySelector(".rightdown").onclick = function() {
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