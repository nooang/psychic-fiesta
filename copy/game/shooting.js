window.onload = function() {
  let canvas
  let ctx

  canvas = document.createElement('canvas')
  ctx = canvas.getContext('2d')

  canvas.width = 400
  canvas.height = 700

  document.body.appendChild(canvas)

  let backgroundImage, spaceshipImage, bulletImage, enemyImage, gameOverImage
  let spaceshipX = canvas.width/2 - 32
  let spaceshipY = canvas.height - 120

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
      console.log(keysDown)
    })
    document.addEventListener('keyup', function(event) {
      delete keysDown[event.key]
      console.log(keysDown)
    })
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
  }

  function render() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY)
  }

  function main() {
    update()
    render()
    requestAnimationFrame(main)
  }

  loadImage()
  setupKeyboardListener()
  main()
}