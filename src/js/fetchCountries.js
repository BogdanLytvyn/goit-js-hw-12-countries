function fetchCountries(searchQuery) {
  const baseUrl = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(baseUrl)
    .then(res => res.json())
    .then(data => data);
}

export default fetchCountries;
