import Menu from './menu.png';

class Dropdown {
    constructor(object) {
        this.button = object;
        this.list = this.button.querySelector('.dropdown-list');
        this.items = this.list.querySelectorAll('.dropdown-item');
        this.icon = object.querySelector('.menu-icon');
        
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

export { Dropdown }; 