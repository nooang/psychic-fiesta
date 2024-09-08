const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
  id = e.target.dataset.id;

  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove('active');
      e.target.classList.add('active');
    })

    articles.forEach((article) => {
      article.classList.remove('active');
      console.log(article)
    })
    const element = document.getElementById(id);
    element.classList.add('active');
  }
})