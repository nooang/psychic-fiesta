const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const randomBetween = (min, max) => {
  return Math.random() * (max - min + 1) + min
}

let total
let rains = []

// 빗줄기 클래스
class Rain {
  constructor(x, y, velocity) {
    this.x = x
    this.y = y
    this.velocity = velocity
  }

  draw() {
    const {x, y, velocity} = this
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + velocity.x * 2, y + velocity.y * 2)
    ctx.stroke()
  }

  animate() {
    if (this.y > innerHeight) {
      this.x = randomBetween(0, innerWidth)
      this.y = -20
    }

    this.x += this.velocity.x
    this.y += this.velocity.y
    this.draw()
  }
}

// 초기화 작업
function init() {
  canvas.width = innerWidth
  canvas.height = innerHeight

  total = 50
  rains = []

  for (let i = 0; i < total; i++) {
    const x = randomBetween(0, innerWidth)
    const y = randomBetween(0, innerHeight)
    const velocity = {
      x: randomBetween(-1, 1),
      y: randomBetween(13, 18)
    }
    rains.push(new Rain(x, y, velocity))
  }
}

// 렌터 함수
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  rains.forEach(particle => particle.animate())

  window.requestAnimationFrame(render)
  console.log('ㅎㅎ')
}

window.addEventListener('resize', () => init())

init()
render()