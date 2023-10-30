function randomFloatBetween(min, max) {
  return Math.random() * (max - min + 1) + min
}

function distance(x1, y1, x2, y2) {
  const distX = x2 - x1
  const distY = y2 - y1
  return Math.sqrt(distX * distX + distY * distY)
}

export default {
  randomFloatBetween, distance
}