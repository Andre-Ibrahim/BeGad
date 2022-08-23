import express, { Application, Request, Response } from "express";
import * as AuthenticationController from "./Controllers/AuthenticationController";

const app: Application = express();
const port = 80;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(
	"/",
	async (req: Request, res: Response): Promise<Response> => {
		return res.status(200).send({
			message: "ok",
		});
	}
);

AuthenticationController.register(app);

try {
	app.listen(port, (): void => {
		console.log(`Connected successfully on port ${port}`);
	});
} catch (error: any) {
	console.error(`Error occured: ${error.message}`);
}


export default app;