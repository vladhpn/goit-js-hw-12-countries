function fetchArticles(nameInput) {
  return fetch(
    `https://restcountries.eu/rest/v2/name/${nameInput}`
  ).then((response) => response.json());
}

export default fetchArticles;
