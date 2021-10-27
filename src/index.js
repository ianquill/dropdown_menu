import './style.css';
import { Dropdown } from './dropdown.js';

console.log('hello world123');

const dropdowns = document.querySelectorAll('.dropdown-button');

dropdowns.forEach(dropdown => {
    new Dropdown(dropdown);
});
