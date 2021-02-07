import articlesList from '../templates/articles-list.hbs';
const refs = {
  articlesContainer: document.querySelector('.js-articles'),
  serchForm: document.querySelector('.js-search-form'),
};

function updateArticlesListMarkup(articl) {
  const articlesListMarkup = articlesList(articl);
  refs.articlesContainer.insertAdjacentHTML('beforeend', articlesListMarkup);
}

export default updateArticlesListMarkup;
