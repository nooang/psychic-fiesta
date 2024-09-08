const hamburgerBtn = document.getElementById('gnb-Hamburger')
const listWrap = document.getElementById('list-wrap')
const iconsWrap = document.getElementById('icons-wrap')

hamburgerBtn.addEventListener('click', () => {
  listWrap.classList.toggle('active');
  iconsWrap.classList.toggle('active');
})