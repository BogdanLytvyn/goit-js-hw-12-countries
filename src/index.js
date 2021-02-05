import './css/style.css';
import fetchCountries from './js/fetchCountries.js';
import countryList from './js/markupCountry';
import refs from './js/refs';
import { error } from '@pnotify/core/';

const debounce = require('lodash.debounce');

function inputCountry(event) {
  event.preventDefault();
  const inputText = event.target.value;
  refs.list.innerHTML = '';
  refs.card.innerHTML = '';
  fetchCountries(inputText).then(data => {
    if (data.status === 404) {
      error({
        text: 'Country not found!',
        delay: 2000,
      });
    }
    countryList(data);
  });
}

refs.input.addEventListener('input', debounce(inputCountry, 500));
