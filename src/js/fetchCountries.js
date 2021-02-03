import countriesListTpl from '../templates/template-countries-list.hbs';
import countryCardTpl from '../templates/country-card.hbs';
import refs from './refs.js';
import { error } from '@pnotify/core/';

const debounce = require('lodash.debounce');

function fetchCountries(searchQuery) {
  const inputText = searchQuery.target.value;
  const baseUrl = `https://restcountries.eu/rest/v2/name/${inputText}`;
  refs.list.innerHTML = '';
  refs.card.innerHTML = '';
  fetch(baseUrl)
    .then(res => {
      return res.json();
    })
    .then(countryList)
    .catch(error => console.log(error));
}

function countryList(data) {
  if (data.length >= 2 && data.length <= 10) {
    const markupList = countriesListTpl(data);
    refs.list.insertAdjacentHTML('beforeend', markupList);
  }
  if (data.length < 2) {
    const markupCard = countryCardTpl(data);
    refs.card.insertAdjacentHTML('beforeend', markupCard);
  }
  if (data.length > 10) {
    error({
      text: 'Too many matches found. Please enter a more specific query!',
      delay: 2100,
    });
  }
}

refs.input.addEventListener('input', debounce(fetchCountries, 500));
export default fetchCountries;
