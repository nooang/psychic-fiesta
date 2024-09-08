const text = [
`asdasd`,
`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi asperiores, aperiam unde esse quo totam sed explicabo, rem, sunt alias odio corporis necessitatibus reprehenderit illum vero modi. Ab, ea fugit!`,
`In inventore rem recusandae alias enim suscipit eos obcaecati a voluptatibus quo, magni tempora ex dignissimos ratione non similique. Labore delectus iste magnam at cupiditate voluptatem maxime iure fugiat? Eligendi.`,
`Minus debitis laudantium soluta velit? Voluptas deleniti ab, cumque ratione repellendus quis fuga? Blanditiis, beatae, iste est voluptatum vero quaerat possimus neque earum, nostrum voluptatibus soluta molestiae eveniet sed enim.`,
`Iste ut, repudiandae ipsam vel eaque expedita reprehenderit iusto aspernatur culpa ab aperiam quo accusamus quasi ipsum officiis doloremque velit esse perspiciatis nisi. Enim doloremque unde nostrum laudantium excepturi aperiam!`,
`Sequi error quia harum rerum, nostrum voluptate eius voluptatibus, illum cum ab quisquam veritatis. Officia sunt commodi earum, quia velit obcaecati exercitationem explicabo mollitia aliquam necessitatibus consequuntur accusantium inventore facere.`,
`Iure ad soluta itaque ipsam, odio aut pariatur ipsum sed. Dolorem ipsum esse commodi ad quibusdam id eaque sequi alias! Accusantium assumenda minus fuga, ad harum asperiores explicabo corporis. Praesentium.`,
`Ipsa qui illo maxime blanditiis optio. Earum beatae similique accusamus itaque laborum consequatur veritatis, consectetur nostrum repudiandae recusandae quia voluptate facere veniam tenetur sed hic et quod dolores placeat commodi?`,
`Mollitia dicta voluptas accusamus sequi nisi minus nulla optio nesciunt veritatis! Distinctio reprehenderit atque aperiam maxime aliquam officia eum, iste consectetur voluptate nam non possimus, similique quis ab, odio assumenda!`,
`Porro, eligendi, voluptas facilis totam odit non molestias ea id aliquid accusantium ad repudiandae eius veniam, at sunt. Ipsa eum quam neque quasi repellat debitis consectetur a id modi sequi!`,
`Id repellat facere sunt beatae, ab nobis ut architecto culpa temporibus atque itaque est nihil alias ducimus adipisci! Molestiae repellendus deserunt officia delectus laboriosam dolores dolore laborum nihil odio maxime?`,
]
const form = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);
  if (isNaN(value) || value < 0 || value > 9) {
    result.innerHTML = `<p class="result">${text[random]}</p>`
  }
  else {
    let tempText = text.slice(0, value);
    tempText = tempText.map(function(item) {
      return `<p class="result">${item}</p>`
    }).join('');
    result.innerHTML = tempText;
  }
})