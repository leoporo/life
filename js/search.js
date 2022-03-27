const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const searchTerm = params.termi;

import data from './db.js';
import { renderPost } from './blog.js';

const highlightText = text => `<span style='background-color: #f1b9a5;'>${text}</span>`;

const search = term => {
  let results = JSON.stringify(data.posts.filter(p => 
    p.title.toLowerCase().includes(term.toLowerCase()) ||
    p.content.toLowerCase().includes(term.toLowerCase())));

  let originalTextVariants = [];

  const arr = [...results.matchAll(new RegExp(term, 'gi'))].map(a => a.index);
  
  arr.forEach(idx => {
    let temp = '';
    for (let i = idx; i < term.length + idx; i++){
      temp += results[i];
    }
    if (!originalTextVariants.includes(temp)) originalTextVariants.push(temp);
  });

  originalTextVariants.forEach(t => {
    results = results.replaceAll(t, highlightText(t));
  });

  return JSON.parse(results);
};

const results = search(searchTerm);

results.forEach(p => document.querySelector('.posts').appendChild(renderPost(p), false));

if (results.length > 0)
  document.querySelector('#noResults').style.display = 'none';
else 
  document.querySelector('#searchTerm').innerText = searchTerm;