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
  }
]

let list = document.getElementById('list')

function showList(val='') {
  list.innerHTML = ''
  pokemons.forEach(pokemon => {
    if (pokemon.name.includes(val)) {
      let li = document.createElement('li')
      li.innerHTML = `
        <img src="${pokemon.url}" alt="꼬부기">
        <p>이름: ${pokemon.name}</p>
        <p>속성: ${pokemon.type}</p>
      `
      list.appendChild(li)
    }
  })
}

showList('')

let search = document.getElementById('search')
let search_btn = document.getElementById('search_btn')

search_btn.addEventListener('click', function(e) {
  e.preventDefault()
  let val = search.value
  showList(val)
  console.log('검색의 상태가?', val)
})