const pokemons = [
  {
    id: 1,
    name: '꼬부기',
    type: '물',
    utl: '../../src/img/꼬부기.png'
  },
  {
    id: 2,
    name: '날쌩마',
    type: '불꽃',
    utl: '../../src/img/날쌩마.png'
  },
  {
    id: 3,
    name: '딱구리',
    type: '바위, 땅',
    utl: '../../src/img/딱구리.png'
  },
  {
    id: 4,
    name: '이상해씨',
    type: '풀, 독',
    utl: '../../src/img/이상해씨.png'
  },
  {
    id: 5,
    name: '파라스',
    type: '벌레, 풀',
    utl: '../../src/img/파라스.png'
  },
  {
    id: 6,
    name: '파이리',
    type: '불꽃',
    utl: '../../src/img/파이리.png'
  }
]

function showList(val='') {

  $('.list').val('')
  const res = pokemons.forEach(pokemon => {
    if (pokemon.name.includes(val)) {
      let template = `
        <li>
          <img src="${pokemon.url}" alt="${pokemon.name}">
          <div>이름: ${pokemon.name}</div>
          <div>속성: ${pokemon.type}</div>
        </li>
      `
      $('.list').append(template)
    }
  })
}

showList('')

$('button').click(() => {
  this.preventDefault()
  console.log($('search').val())
  showList($('search').val())
})