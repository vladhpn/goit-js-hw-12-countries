import fetchArticles from '../js/fetch-articles';
import updateArticlesMarkup from '../js/update-articles-markup';
import updateArticlesListMarkup from '../js/articles-markup-list';

const { error, info } = require('@pnotify/core');
var debounce = require('lodash.debounce');

const refs = {
  articlesContainer: document.querySelector('.js-articles'),
  serchForm: document.querySelector('.js-search-form'),
};

refs.serchForm.addEventListener('input', debounce(cuontrySearchInput, 500));

function cuontrySearchInput(event) {
  event.preventDefault();
  const nameInput = event.target.value;
  refs.articlesContainer.innerHTML = '';

  fetchArticles(nameInput)
    .then((value) => {
      if (value.length > 10) {
        error({
          text: 'Too many matches found. Please enter a more specific query!',
        });
      } else if (value.status === 404) {
        error({
          text: 'Not found!',
        });
      } else if (value.length === 1) {
        fetchArticles(nameInput).then(updateArticlesMarkup);
      } else if (value.length <= 10) {
        fetchArticles(nameInput).then(updateArticlesListMarkup);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
