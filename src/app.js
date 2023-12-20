import express from 'express';
import routes from './routes.js';

class App {
  constructor() {
    this.server = express();
    this.meddlewares();
    this.routes();
  }

  meddlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
