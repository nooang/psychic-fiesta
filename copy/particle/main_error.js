import util from './utils.js'

// 1. 캔버스 불러오기
const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')

// 2. Particle 클래스 정의
class Particle {
  constructor(x, y, radius, velocity) {
    this.x = x
    this.y = y
    this.radius = radius
    this.velocity = velocity
  }

  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    ctx.fillStyle = '#fff'
    ctx.fill()
    ctx.closePath()
  }

  animate() {
    if (this.x < 0 || this.x > innerWidth || this.y < 0 || this.y > innerHeight) {
      this.x = util.randomFloatBetween(0, innerWidth)
      this.y = util.randomFloatBetween(0, innerHeight)
    }

    (mouse.isActive ? particles.concat(mouse) : particles).forEach(particle => {
      const distance = util.distance(particle.x, particle.y, this.x, this.y)
      if (distance < 400) {
        const from = {
          x: this.x,
          y: this.y
        }
        const to = {
          x: particle.x,
          y: particle.y
        }
        new Line(from, to, distance).draw()
      }
    })

    this.x += this.velocity.x
    this.y += this.velocity.y
    this.draw()
  }
}

class Line {
  constructor(from, to, distance) {
    this.from = from
    this.to = to
    this.distance = distance
  }
  draw() {
    ctx.beginPath()
    ctx.moveTo(this.to.x, this.to.y)
    ctx.lineTo(this.to.x, this.to.y)
    ctx.strokeStyle = `rgba(255, 215, 0, ${1 - this.distance / 400})`
    ctx.lineWidth = 1
    ctx.stroke()
  }
}


// 3. 파티클 만들기
const TOTAL = 50
let particles = []
let mouse = { x: 0, y: 0, isActive: false }
for (let i = 0; i < TOTAL; i++) {
  const x = util.randomFloatBetween(0, innerWidth)
  const y = util.randomFloatBetween(0, innerHeight)
  const radius = util.randomFloatBetween(0.5, 2)
  const velocity = {
    x: util.randomFloatBetween(-2, 2),
    y: util.randomFloatBetween(-2, 2)
  }
  particles.push(new Particle(x, y, radius, velocity))
}

// 4. 매 프레임마다 실행되는 재귀함수
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  particles.forEach(particle => particle.animate())
  window.requestAnimationFrame(render)
}

// 5. 윈도우 resize 함수 정의
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})
canvas.addEventListener('mouseenter', () => mouse.isActive = true)
canvas.addEventListener('mouseleave', () => mouse.isActive = false)
canvas.addEventListener('mousemove', e => {
  mouse.e = e.clientX
  mouse.e = e.clientY
})

// 6. 실행하기
render()
