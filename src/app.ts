import express, { NextFunction, Request, Response } from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500)
    res.json({ error: error.message})
});

export default app;