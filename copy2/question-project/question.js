const questions = document.querySelectorAll('.question');
questions.forEach((question) => {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', (e) => {
    questions.forEach((item) => {
      if (question != item) {
        item.classList.remove('show-text');
      }
    })
    question.classList.toggle('show-text');
  })
})


/*
const btns = document.querySelectorAll('.question-btn');

btns.forEach((btn) => {
  btn.addEventListener('click', function(e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle('show-text');
  });
});
*/