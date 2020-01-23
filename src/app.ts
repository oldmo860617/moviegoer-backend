import * as express from 'express';
import { Application, Request, Response, NextFunction } from 'express';
import "reflect-metadata";
import { createConnection } from "typeorm";

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.send('test!!!!!');
})

createConnection().then(() => {
	app.listen(5000, () => {
		console.log('server running on 5000')
	})
})
