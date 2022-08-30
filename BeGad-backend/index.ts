import * as bodyParser from 'body-parser';
import { Container } from 'inversify';
import "reflect-metadata";
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import BaseController from "./Controllers/BaseController";
import AuthentcationController from './Controllers/AuthenticationController';

// declare metadata by @controller annotation

// set up container
let container = new Container();

container.bind<BaseController>('BaseController').to(BaseController);
container.bind<AuthentcationController>('AuthenticationController').to(AuthentcationController);

// create server
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
  // add body parser
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

let app = server.build();
app.listen(80);