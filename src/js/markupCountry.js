import refs from './refs.js';
import countriesListTpl from '../templates/template-countries-list.hbs';
import countryCardTpl from '../templates/country-card.hbs';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core/';

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

export default countryList;
