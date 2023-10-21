const pokemons = [
  {
    id: 1,
    name: '꼬부기',
    type: '물',
    url: '../../src/img/꼬부기.png'
  },
  {
    id: 2,
    name: '날쌩마',
    type: '불꽃',
    url: '../../src/img/날쌩마.png'
  },
  {
    id: 3,
    name: '딱구리',
    type: '바위, 땅',
    url: '../../src/img/딱구리.png'
  },
  {
    id: 4,
    name: '이상해씨',
    type: '풀, 독',
    url: '../../src/img/이상해씨.png'
  },
  {
    id: 5,
    name: '파라스',
    type: '풀, 벌레',
    url: '../../src/img/파라스.png'
  },
  {
    id: 6,
    name: '파이리',
    type: '불꽃',
    url: '../../src/img/파이리.png'
  },
]

const list = document.getElementById('list')

function showList(val='') {
  list.innerHTML = ''
  const res = pokemons.forEach(pokemon => {
    if (pokemon.name.includes(val)) {
      const li = document.createElement('li')
      li.innerHTML = `
        <img src='${pokemon.url}' />
        <p>이름: ${pokemon.name}</P>
        <p>속성: ${pokemon.type}</P>
      `
      list.appendChild(li)
    }
  })
}

showList('')

const searchInput = document.getElementById('search')
const searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const val = searchInput.value
  console.log(val)
  console.log(e.preventDefault())
  showList(val)
})