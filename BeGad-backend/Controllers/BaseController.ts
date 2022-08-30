import { controller, httpGet, interfaces } from "inversify-express-utils";
import * as express from "express";

@controller("/base")
export default class BaseController implements interfaces.Controller {
    
    @httpGet("/")
    private base(req: express.Request, res: express.Response, next: express.NextFunction): void {
        res.send("ok");
    }

    @httpGet("/test")
    private test(req: express.Request, res: express.Response, next: express.NextFunction): void {
        res.send("test");
    }

}