class App {
  init() {
    this.initMobileMenu();

  }

  constructor() {

  }

  initMobileMenu() {
    console.log('script.js');
  }

}

const app = new App();
document.addEventListener('DOMContentLoaded', app.init());
