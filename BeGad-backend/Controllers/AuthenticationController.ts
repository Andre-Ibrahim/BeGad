import * as express from "express";

export const register = ( app: express.Application ) => {
    const oidc = app.locals.oidc;

    // define a secure route handler for the login page that redirects to /guitars
    app.post( "/login", ( req, res ) => {

        res.send(req.body.username);
    } );

    // define a route to handle logout
    app.get( "/logout", ( req: any, res ) => {
        res.redirect( "/" );
    } );

};