import { controller, httpPost, interfaces } from "inversify-express-utils";
import * as express from "express";

@controller("/authentication")
export default class AuthentcationController implements interfaces.Controller {
    
    @httpPost("/login")
    private login(req: express.Request, res: express.Response, next: express.NextFunction): void {
        res.send("user is logged in");
    }

    @httpPost("/logout")
    private logout(req: express.Request, res: express.Response, next: express.NextFunction): void {
        res.send("user is logged out");
    }

}