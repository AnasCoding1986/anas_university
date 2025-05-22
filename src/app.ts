import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewire/globalErrorHandler';
import notFoundRoute from './app/middlewire/notFoundRoute';
import router from './app/routes';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1', router)

const test = (_req: Request, res: Response) => {
  res.send('Hello World!');
}

app.get('/', test);

app.use(globalErrorHandler);

app.use(notFoundRoute);

export default app;
