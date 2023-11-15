let progressWrap = document.querySelectorAll('.progress_wrap')

progressWrap.forEach(item => {
  numAnimation(item)
})

function numAnimation(item) {
  let initialRate = 0
  let targetRate = item.getAttribute('data-num')
  let progressBar = item.querySelector('.bar')
  let progressRate = item.querySelector('span')

  let numAnim = setInterval(() => {
    initialRate++
    if (initialRate == targetRate) {
      clearInterval(numAnim)
    }
    progressBar.style.width = `${initialRate}%`
    progressRate.innerText = `${initialRate}%`
  }, 20)
}

