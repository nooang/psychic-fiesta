window.onload = function() {
  let numArr = []
  let dsp=document.querySelector('.display')
  let num=document.querySelector('.zero')
  num.addEventListener('click', function() {
    numArr.push(this.value)
    console.log(numArr)

    dsp.value=numArr
  })
}