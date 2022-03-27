const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const searchTerm = params.termi;

import data from './db.js';
import { renderPost } from './blog.js';

const highlightText = text => `<span style='background-color: #ffddd2;'>${text}</span>`;

const search = term => {
  let results = JSON.stringify(data.posts.filter(p => 
    p.content.toLowerCase().includes(term.toLowerCase())));

  let originalText = '';
  let idx = results.toLowerCase().indexOf(term.toLowerCase());

  for (let i = 0, j = idx; i < term.length, j <= term.length + idx; i++, j++){
    if (term.toLowerCase()[i] === results.toLowerCase()[j]) originalText += results[j];
  }

  console.log(originalText);
  return JSON.parse(results.replaceAll(originalText, highlightText(originalText)));
};

const results = search(searchTerm);

results.forEach(p => document.querySelector('.posts').appendChild(renderPost(p)));

if (results.length > 0)
  document.querySelector('#noResults').style.display = 'none';