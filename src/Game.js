import { Application } from 'pixi.js';

export default class Game {
   constructor() {
      this.app = new Application();
   }

   createApp() {
      document.body.appendChild(this.app.view);
   }
}
