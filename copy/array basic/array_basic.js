// 배열을 스트링으로 변환
{
  const fruits = ['apple', 'banana', 'orange']
  const result = fruits.join(', ')
  console.log('--------1번-------------')
  console.log(result)
}

// 스트링을 배열로 변환
{
  const fruits = '🍎, 🍌, 🍊'
  const result = fruits.split(', ')
  console.log('-----------2번----------')
  console.log(result)
}

// 배열을 거꾸로 변환, 배열 자체를 바꿔서 그걸 리턴
{
  const fruits = [1, 2, 3, 4, 5]
  const result = fruits.reverse()
  console.log('-----------3번----------')
  console.log(result)
  console.log(fruits)
}

// 배열의 첫 번째, 두 번째 요소를 제외하고 저장하기
{
  const array = [1, 2, 3, 4, 5]
  const result = array.splice(1, 2) // 0번째부터 2개를 가져온다.
  const array2 = [1, 2, 3, 4, 5]
  const result2 = array2.slice(1, 4) // start부터 end까지 가져온다.
  console.log('----------4번-----------')
  console.log(result)
  console.log(result2)
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name
    this.age = age
    this.enrolled = enrolled
    this.score = score
  }
}

const students = [
  new Student('A', 20, true, 50),
  new Student('B', 21, false, 100),
  new Student('C', 22, true, 90),
  new Student('D', 23, false, 80),
  new Student('E', 24, true, 60),
]

// 학생의 점수가 90점인 학생 가져오기
{
  console.log('----------5번-----------')
  const result = students.find((student) => student.score === 90)
  console.log(result)
}

// 수업에 등록한 학생만 가져오기
{
  console.log('----------6번-----------')
  const result = students.filter((student) => student.enrolled)
  console.log(result)
}

// 점수만 등록된 배열을 새로 만들기
{
  console.log('----------7번-----------')
  const result = students.map((student) => student.score)
  console.log(result)
}

// 50점보다 낮은 학생의 점수가 있는 지 확인
{
  console.log('----------8번-----------')
  const result = students.some((student) => student.score < 50)
  console.log(result)
}
{
  const result = students.every((student) => student.score < 50)
  console.log(result)
}

// 학생들의 평균 점수 구하기
{
  console.log('----------9번-----------')
  // 값을 모으거나 전달할 때 사용, 돌면서 값을 누적
  const result = students.reduce((prev, curr) => prev + curr.score, 0)
  console.log(result / students.length)
}

// 학생들의 점수를 스트링으로 변환
{
  console.log('----------10번-----------')
  const result = students.map(student => student.score)
  .filter((score) => score >= 50) // 50점 이상인 학생들만 필터링
  .join(', ')
  console.log(result)
}

// 학생들의 점수를 오름차순으로 변환
{
  console.log('----------------bonus-----------------')
  const result = students.map((student) => student.socre)
  .sort((a, b) => a - b)
  .join()
  console.log(result)
}