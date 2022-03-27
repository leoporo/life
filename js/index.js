document.querySelector("#goto_sherbimet").addEventListener("click", function(){
  document.querySelector(".sherbimet").scrollIntoView({
    behavior: "smooth"
  });
});

document.querySelector("#goto_rreth").addEventListener("click", function(){
  document.querySelector(".rreth").scrollIntoView({
    behavior: "smooth"
  });
});

import data from './db.js';

const latest_posts = data.posts.slice(data.posts.length-3, data.posts.length)
                          .sort((a, b) => b.id - a.id);

latest_posts.forEach(post => {
  const postDiv = document.createElement('a');
  postDiv.classList.add('post', 'rounded', 'shadow');
  postDiv.href = 'blog.html?id=' + post.id;

  const title = document.createElement('h3');
  title.innerText = post.title;

  const thumbnail = document.createElement('img');
  thumbnail.src = post.image_url;
  thumbnail.classList.add('post-image-thumbnail');

  const content = document.createElement('p');
  content.innerHTML = post.content.slice(0, 100) + '...';

  postDiv.appendChild(title);
  postDiv.appendChild(thumbnail);
  postDiv.appendChild(content);
  document.querySelector('.home-posts').appendChild(postDiv);
});