import Menu from './menu.png';

class Dropdown extends HTMLElement {
    constructor(object) {
        super();

        this.button = object.querySelector('input');
        this.list = this.button.querySelector('dropdown-component');
        this.items = this.list.querySelectorAll('li');
        this.icon = object.querySelector('img');
        
        this.isOpen = false;

        this.button.addEventListener('click', () => {
            console.log('clicked');
            this.clickButton();
        })

        this.icon.src = Menu;
        console.log(this.icon.src);

    }

    open() {
        this.isOpen = true;
        this.items.forEach(element => {
            element.classList.add('visible');
        });
        this.list.classList.add('visible');
    }

    close() {
        this.isOpen = false;
        this.items.forEach(element => {
            element.classList.remove('visible');
        });
        this.list.classList.remove('visible');
    }

    clickButton() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

}

customElements.define('dropdown-component', Dropdown, {extends: 'ul'});

export { Dropdown }; 