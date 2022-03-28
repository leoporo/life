import data from './db.js';
import { renderPost } from './blog.js';

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const searchTerm = params.termi;

const convertToEnglishAlphabet = (text) => {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case 'ë':
        result += 'e';
        break;
      case 'Ë':
        result += 'E';
        break;
      case 'ç':
        result += 'c';
        break;
      case 'Ç':
        result += 'C';
        break;
      default:
        result += text[i];
        break;
    }
  }

  return result;
};

const highlightText = text => `<span style='background-color: #f1b9a5;'>${text}</span>`;

const search = term => {
  const anglicizedTerm = convertToEnglishAlphabet(term);

  let results = JSON.stringify(data.posts.filter(p =>  {
    const anglicizedTitle = convertToEnglishAlphabet(p.title);
    const anglicizedContent = convertToEnglishAlphabet(p.content);

    return anglicizedTitle.toLowerCase().includes(anglicizedTerm.toLowerCase()) ||
    anglicizedContent.toLowerCase().includes(anglicizedTerm.toLowerCase());
  }));

  let originalTextVariants = [];
  
  const arr = [...convertToEnglishAlphabet(results).matchAll(new RegExp(anglicizedTerm, 'gi'))].map(a => a.index);
  
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