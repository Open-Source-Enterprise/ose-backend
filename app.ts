import * as express from 'express';
import authRouter from './routes/auth';

const app = express();
const port = 8080;

app.use('/', authRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

export default app;
