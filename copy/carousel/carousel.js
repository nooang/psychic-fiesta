const carousel = document.querySelector('.carousel'),
firstImg = carousel.querySelectorAll('.img')[0],
arrowIcons = document.querySelectorAll('.wrapper .i')

let isDragStart = false, prevPageX, prevScrollLeft
console.log(isDragStart)
const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? 'none' : 'block'
  arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? 'none' : 'block'
}

arrowIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    let firstImgWidth = firstImg.clientWidth + 14
    carousel.scrollLeft += icon.id  == 'left' ? -firstImgWidth : firstImgWidth
    setTimeout(() => {
      showHideIcons()
    }, 60);
  })
})

const DragStart = (e) => {
  isDragStart = true
  prevPageX = e.pageX
  prevScrollLeft = carousel.scrollLeft
}

const dragging = (e) => {
  if (!isDragStart) return
  e.preventDefault()
  carousel.classList.add('dragging')
  let positionDiff = e.pageX - prevPageX
  carousel.scrollLeft = prevScrollLeft - positionDiff
  showHideIcons()
}

const drageStop = () => {
  isDragStart = false
  carousel.classList.remove('dragging')
}

carousel.addEventListener('mousedown', DragStart)
carousel.addEventListener('mousemove', dragging)
carousel.addEventListener('mouseup', drageStop)
carousel.addEventListener('mouseleave', drageStop)