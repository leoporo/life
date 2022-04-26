import data from './db.js';

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

const latest_posts = data.posts.slice(data.posts.length-4, data.posts.length)
                          .sort((a, b) => b.id - a.id);

latest_posts.forEach(post => {
  const postLink = document.createElement('a');
  postLink.classList.add('post', 'rounded-xl', 'shadow-xl');
  postLink.href = 'blog.html?id=' + post.id;

  const title = document.createElement('h3');
  title.innerText = post.title;

  const thumbnail = document.createElement('img');
  thumbnail.src = post.image_url;
  thumbnail.classList.add('post-image-thumbnail');

  const content = document.createElement('p');
  const temp = document.createElement('p');
  temp.innerHTML = post.content.slice(0, 100) + '...';
  content.innerHTML = temp.innerText;

  postLink.appendChild(thumbnail);
  postLink.appendChild(title);
  postLink.appendChild(content);
  document.querySelector('.home-posts').appendChild(postLink);
});