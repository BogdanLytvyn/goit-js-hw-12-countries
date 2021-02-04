import './css/style.css';
import fetchCountries from './js/fetchCountries.js';
import countryList from './js/markupCountry';
import refs from './js/refs';

const debounce = require('lodash.debounce');

function inputCountry(event) {
  event.preventDefault();
  const inputText = event.target.value;
  refs.list.innerHTML = '';
  refs.card.innerHTML = '';
  fetchCountries(inputText)
    .then(countryList)
    .catch(error => error);
}

refs.input.addEventListener('input', debounce(inputCountry, 500));
