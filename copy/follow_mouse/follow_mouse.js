window.onload = function() {
  let myDiv = document.getElementById('my-div')
  
  function isTouchDevice() {
    try {
      document.createEvent("TouchEvent")
      return true
    } catch (e) {
      return false
    }
  }
  
  const move = (e) => {
    try {
      var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX
      var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY
      console.log(`${x}, ${y}`)
    } catch (e) {}
  
    myDiv.style.left = x - 30 + "px"
    myDiv.style.top = y - 30 + "px"
  }
  
  document.addEventListener('mousemove', (e) => {
    move(e)
  })
  
  document.addEventListener('touchmove', (e) => {
    move(e)
  })
}