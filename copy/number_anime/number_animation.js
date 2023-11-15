console.log(document.querySelector('h1').innerText)
console.log(document.querySelector('h1').innerHTML)


let progressWrap = document.querySelectorAll('.progress_wrap')

progressWrap.forEach(function(item, index) {
  numAnimation(index)
})

function numAnimation(idx) {
  let initialRate = 0
  let targetRate = progressWrap[idx].getAttribute('data-num')
  let progressBar = progressWrap[idx].querySelector('.bar')
  let progressRate = progressWrap[idx].querySelector('span')

  let numAnim = setInterval(function() {
    initialRate++
    if (initialRate == targetRate) {
      clearInterval(numAnim)
    }
    progressBar.style.width = `${initialRate}%`
    progressRate.innerText = `${initialRate}%`
  }, 20)
}

