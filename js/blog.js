import data from './db.js';

export const renderPost = (post) => {
    let postDiv = document.createElement('a');
    postDiv.href = 'blog.html?id=' + post.id
    postDiv.classList.add('post', 'rounded', 'shadow');

    let postTitle = document.createElement('h2');
    postTitle.innerHTML = post.title;

    let thumbnail = document.createElement('img');
    thumbnail.classList.add('post-image-thumbnail');
    thumbnail.src = post.image_url;

    let postContent = document.createElement('p');
    postContent.innerHTML = post.content.slice(0, 325) + '...';

    postDiv.appendChild(postTitle);
    postDiv.appendChild(thumbnail);
    postDiv.appendChild(postContent);
    
    return postDiv;
};

if (window.location.href.includes('blog.html')){
    const posts = data.posts.sort((a, b) => b.id - a.id);
    posts.forEach(p => document.querySelector('.posts').appendChild(renderPost(p)));
}