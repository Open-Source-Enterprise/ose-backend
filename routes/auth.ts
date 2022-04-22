import * as express from 'express';

const router = express.Router();

router.get('/login', (request, response) => {
  response.render('login');
});

export default router;
