let horizontal_underline = document.getElementById('horicontal_underline')
let horizontal_menus1 = document.querySelectorAll('nav:first-child a')
let horizontal_menus2 = document.querySelectorAll('nav:nth-child(2) a')
console.log(horizontal_underline)
console.log(horizontal_menus1)
console.log(horizontal_menus2)

horizontal_menus1.forEach(menu => menu.addEventListener('click', (e) => horizontal_Indicator1(e)))

function horizontal_Indicator1(e) {
  horizontal_underline.style.left = e.currentTarget.offsetLeft + 'px'
  horizontal_underline.style.width = e.currentTarget.offsetWidth + 'px'
  horizontal_underline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px"
}

horizontal_menus2.forEach(menu => menu.addEventListener('click', horizontal_Indicator2))

function horizontal_Indicator2(e) {
  horizontal_underline.style.left = e.currentTarget.offsetLeft + 'px'
  horizontal_underline.style.width = e.currentTarget.offsetWidth + 'px'
  horizontal_underline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px"
}
