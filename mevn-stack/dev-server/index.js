import express from 'express';
const app = express();
import { registerRoutes } from './routes';
const port = 3000;

registerRoutes(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`MEVN app listening at http://localhost:${port}`);
});
