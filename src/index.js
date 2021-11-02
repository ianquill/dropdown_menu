import './style.css';
import { Dropdown } from './dropdown.js';

console.log('hello world123');

const dropdowns = document.querySelectorAll('.dropdown-template');

dropdowns.forEach((dropdown) => {
    const component = document.createElement('dropdown-component', dropdown);
    document.body.appendChild(component);
});
