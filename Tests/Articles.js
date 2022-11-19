'use strict';

const getData = async function (url) {
  if (!url || (typeof url) !== 'string') {
    throw new Error('Wrong url');
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

async function solution() {
  function generateAricle(title, content) {
    const article = document.createElement('div');

    article.className = 'article';

    const article_title = document.createElement('div');
    
    article_title.className = 'article-title';
    article_title.textContent = title;

    const article_content = document.createElement('div');
    
    article_content.className = 'article-content';
    article_content.textContent = content;

    [article_title, article_content].forEach(element => {
      article.appendChild(element);
    });

    return article;
  }

  const url = "http://example.com/articles";

  try {
    const articles = await getData(url);
    const fragment = document.createDocumentFragment();

    articles.forEach(({ title, content }) => {
      fragment.appendChild(generateAricle(title, content));
    });

    document.querySelector('.articles-list').appendChild(fragment);
  } catch (e) {
    console.error(e.message);
  }
}