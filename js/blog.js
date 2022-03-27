import data from './db.js';

export const renderPost = (post, singlePost) => {
    const postDiv = document.createElement('div');
    let postTitle = null;
    if (singlePost) {
        postTitle = document.createElement('h2');
        postTitle.innerHTML = post.title;
        postDiv.classList.add('single-post');
        document.querySelector('#blogTitle').style.display = 'none';
    }
    else {
        postTitle = document.createElement('a');
        postTitle.href = 'blog.html?id=' + post.id;
        postTitle.classList.add('post-title-link');
        const heading = document.createElement('h2');
        heading.innerHTML = post.title;
        postTitle.appendChild(heading);
        postDiv.classList.add('post', 'rounded-xl', 'shadow-xl');
    }

    const postDate = document.createElement('p');
    postDate.classList.add('post-date');
    postDate.innerText = 'Publikuar më: ' + post.date_posted;

    const image = document.createElement('img');
    image.classList.add('post-image');
    image.src = post.image_url;

    const postContent = document.createElement('p');
    postContent.classList.add('post-content');
    postContent.innerHTML = post.content;

    postDiv.appendChild(postTitle);
    postDiv.appendChild(postDate);
    postDiv.appendChild(image);
    postDiv.appendChild(postContent);
    
    return postDiv;
};

if (window.location.href.includes('blog.html')){
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      
    const id = params.id;

    if (id == undefined || id == ''){
        const posts = data.posts.sort((a, b) => b.id - a.id);
        posts.forEach(p => document.querySelector('.posts').appendChild(renderPost(p, false)));
    }
    else {
        const post = data.posts.filter(p => p.id == id)[0];
        if (post !== undefined) {
            document.querySelector('.posts').appendChild(renderPost(data.posts.filter(p => p.id == id)[0], true));
        }
        else {
            document.querySelector('.post-not-found').style.display = 'block';
        }
    }
}
