import { Application } from "pixi.js";

class Game {
  constructor() {
    this.app = new Application();
    this.createApp();
  }

  createApp() {
    document.body.appendChild(this.app.view);
  }
}

new Game();
