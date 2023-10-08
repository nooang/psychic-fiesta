window.onload = function() {
  let canvas
  let ctx
  let gameOver=false
  let score = 0

  canvas = document.createElement('canvas')
  ctx = canvas.getContext('2d')

  canvas.width = 400
  canvas.height = 700

  document.body.appendChild(canvas)

  let backgroundImage, spaceshipImage, bulletImage, enemyImage, gameOverImage
  let spaceshipX = canvas.width/2 - 32
  let spaceshipY = canvas.height - 120

  let bulletList = []
  
  function Bullet() {
    this.x = 0
    this.y = 0
    this.init = function () {
      this.x = spaceshipX + 10
      this.y = spaceshipY - 20
      this.alive = true

      bulletList.push(this)
    }

    this.update = function() {
      this.y -= 7
    }

    this.checkHit = function() {
      for (let i = 0; i < enemyList.length; i++) {
        if(this.y <= enemyList[i].y && 
          this.x >= enemyList[i].x && 
          this.x <= enemyList[i].x + 40) {
          score++
          this.alive = false
          enemyList.splice(i, 1)
        }
      }
    }
  }

  function generateRandomValue(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNum
  }

  let enemyList = []

  function Enemy() {
    this.x = 0
    this.y = 0
    this.init = function() {
      this.y = 0
      this.x = generateRandomValue(0, canvas.width-48)
      enemyList.push(this)
    }
    
    this.update = function() {
      this.y += 2
      if (this.y >= canvas.height - 48) {
        gameOver = true
        console.log('gameover')
      }
    }

  }

  function loadImage() {
    backgroundImage = new Image()
    backgroundImage.src = "./space_background.avif"
    spaceshipImage = new Image()
    spaceshipImage.src = "./spaceship.png"
    bulletImage = new Image()
    bulletImage.src = "./bullet.png"
    enemyImage = new Image()
    enemyImage.src = "./enemy.png"
    gameOverImage = new Image()
    gameOverImage.src = "./game_over.png"
  }

  let keysDown={}

  function setupKeyboardListener() {
    document.addEventListener('keydown', function(event) {
      keysDown[event.key] = true
    })
    document.addEventListener('keyup', function(event) {
      delete keysDown[event.key]
      
      if (event.key == ' ') {
        createBullet()
        console.log('bullet')
      }
    })
  }

  function createBullet() {
    let b = new Bullet()
    b.init()
  }

  function createEnemy() {
    const interval = setInterval(function() {
      let e = new Enemy()
      e.init()
    }, 1)
  }

  function update() {
    if ('ArrowRight' in keysDown) {
      spaceshipX += 5
      if ('ArrowUp' in keysDown) {
        spaceshipY -= 5
      }
      else if ('ArrowDown' in keysDown) {
        spaceshipY += 5
      }
    }
    else if ('ArrowLeft' in keysDown) {
      spaceshipX -= 5
      if ('ArrowUp' in keysDown) {
        spaceshipY -= 5
      }
      else if ('ArrowDown' in keysDown) {
        spaceshipY += 5
      }
    }
    else if ('ArrowUp' in keysDown) {
      spaceshipY -= 5
      if ('ArrowRight' in keysDown) {
        spaceshipX += 5
      }
      else if ('ArrowLeft' in keysDown) {
        spaceshipX -= 5
      }
    }
    else if ('ArrowDown' in keysDown) {
      spaceshipY += 5
      if ('ArrowRight' in keysDown) {
        spaceshipX += 5
      }
      else if ('ArrowLeft' in keysDown) {
        spaceshipX -= 5
      }
    }

    if (spaceshipX <= 0) {
      spaceshipX = 0
    }
    if (spaceshipX >= canvas.width - 64) {
      spaceshipX = canvas.width - 64
    }
    if (spaceshipY <= 12) {
      spaceshipY = 12
    }
    if (spaceshipY >= canvas.height - 76) {
      spaceshipY = canvas.height - 76
    }

    for (let i = 0; i < bulletList.length; i++) {
      if (bulletList[i].alive) {
        bulletList[i].update()
        bulletList[i].checkHit()
      }
    }

    for (let i = 0; i < enemyList.length; i++) {
      enemyList[i].update()
    }


  }

  function render() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY)
    ctx.fillText(`Score: ${score}`, 20, 40)
    ctx.fillStyle = 'white'
    ctx.font = '16pt Arial'

    for (let i = 0; i < bulletList.length; i++) {
      if (bulletList[i].alive) {
        ctx.drawImage(bulletImage, bulletList[i].x, bulletList[i].y)
      }
    }

    for (let i = 0; i < enemyList.length; i++) {
      ctx.drawImage(enemyImage, enemyList[i].x, enemyList[i].y)
    }
  }

  function main() {
    if(!gameOver) {
      update()
      render()
      requestAnimationFrame(main)
    }
    else {
      ctx.drawImage(gameOverImage, 10, 100, 380, 380)
    }
  }

  loadImage()
  setupKeyboardListener()
  createEnemy()
  main()
}