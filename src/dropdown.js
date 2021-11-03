import Menu from "./menu.png";

class Dropdown extends HTMLElement {
  constructor() {
    super();

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

    this.icon.src = Menu;
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
