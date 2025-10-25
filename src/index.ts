import express, {type Request, type Response} from 'express';
import { AppRoutes } from './routes/routes.js';

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(AppRoutes.routes);

// app.get('/', (req: Request, res: Response) => {
//     res.send('watafa');
// });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});