window.onload = function() {
  var cube = document.querySelector('.cube')
  var parts = ['front', 'back', 'right', 'left', 'top', 'bottom']

  parts.forEach(part => {
    var wrapper = document.createElement('div')
    wrapper.classList.add(part)

    for (let i = 1; i <= 3; i++) {
      var side = document.createElement('div')
      wrapper.appendChild(side)

      for (let y = 1; y <= 3; y++) {
        var box = document.createElement('span')
        side.appendChild(box)
      }
    }
    cube.appendChild(wrapper)
  })
}