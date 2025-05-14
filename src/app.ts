import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoute } from './app/modules/student/student.route';
import { UserRoute } from './app/modules/users/user.route';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/student', StudentRoute);
app.use('/api/v1/user', UserRoute);

const getAController = (req: Request, res: Response) => {
  res.send('Hello World!');
}

app.get('/', getAController);

export default app;
