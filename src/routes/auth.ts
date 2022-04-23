import express, { Response, Request } from 'express';
import passport from 'passport';

const router = express.Router();

// Redirect the user to the Google signin page
router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }),
);

// Retrieve user data using the access token received
router.get(
  '/auth/google/callback',
  passport.authenticate('google', { session: false }),
  (req:Request, res:Response) => {
    res.redirect('/profile/');
  },
);
// Profile route after successful sign in
router.get('/profile', (req:Request, res:Response) => {
  res.send('Welcome');
});

export default router;

// http://localhost:8080/auth/redirect
