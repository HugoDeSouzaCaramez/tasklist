import express from 'express';
import cors from 'cors';
import routes from './routes.js';

//import './app/models/index.js';

class App {
  constructor() {
    this.server = express();
    this.meddlewares();
    this.routes();
  }

  meddlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
