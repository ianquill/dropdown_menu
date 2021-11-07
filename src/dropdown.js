import Menu from "./menu.png";

class Dropdown extends HTMLElement {
  constructor() {
    super();

    this.iconWidth = '30px';
    this.iconHeight = '30px';

    console.log("running constructor for dropdown");
    console.log(this.id);
    this.button = this.querySelector("input");
    this.list = this.querySelector(".dropdown-list");
    this.items = this.list.querySelectorAll("li");
    this.icon = this.querySelector(".menu-icon");
    this.button.classList.toggle("visible");
    this.icon.classList.toggle("visible");

    this.isOpen = false;

    this.button.addEventListener("click", () => {
      console.log("clicked");
      this.clickButton();
    });

    this.button.style.width = this.iconWidth;
    this.button.style.height = this.iconHeight;

    this.icon.addEventListener("click", () => {
      console.log("clicked icon");
    });

    this.icon.src = Menu;
    this.icon.style.width = this.iconWidth;
    this.icon.style.height = this.iconHeight;

    this.list.style.top = this.iconHeight;

    this.style.width = this.iconWidth;
    this.style.height = this.iconHeight;


    this.width = this.list.offsetWidth;
    this.rights = this.querySelectorAll('.right');
    for (let i = 0; i < this.rights.length; i++) {
      this.rights[i].style.transformOrigin = 'top right';
      this.rights[i].style.transform = `translate(-${this.width}px`;
      this.rights[i].style.left = this.iconWidth;      
    }
  }

  // connectedCallback() {}

  open() {
    this.isOpen = true;
    this.items.forEach((element) => {
      element.classList.toggle("visible");
    });
    this.list.classList.toggle("visible");
  }

  close() {
    this.isOpen = false;
    this.items.forEach((element) => {
      element.classList.toggle("visible");
    });
    this.list.classList.toggle("visible");
  }

  clickButton() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
}

customElements.define("dropdown-component", Dropdown);

export { Dropdown };
