
import { header } from './modules/header';
import { footer } from './modules/footer';
import { lunch } from './modules/lunch-generator';


class App {

  constructor() {
      this.renderTemplate();
      lunch.changeFoods();
      lunch.changeColor();
      lunch.changeColor2();
  }

  renderTemplate() {
      const template = `
          <img src=${header.logo}></img>
          <h1>${header.title}</h1>
          <img id="foodimg" src=${lunch.foodImage}></img>
          <p id="foodname">${lunch.foods}</p>
          <button id='foodButton'>GENERATE MEAL</button>
          <h2>${footer.footerContent}</h2>
          <img src=${footer.logo2}></img>
      `;

      document.body.innerHTML = template;

  }
}

new App;
