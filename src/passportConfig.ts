import GoogleStrategy from 'passport-google-oauth2';
import passportLib from 'passport';
import User from './models/userModel';

export default (passport: typeof passportLib): void => {
  passport.use(new GoogleStrategy.Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `http://localhost:${process.env.PORT}/auth/google/callback`,
      passReqToCallback: true,
    },
    (async (
      request: any,
      accessToken: any,
      refreshToken: any,
      profile: { id: any; displayName: any; emails: { value: any; }[]; },
      done: Function,
    ) => {
      try {
        const existingUser = await User.findOne({ 'google.id': profile.id });
        // If user exists return the user
        if (existingUser) {
          return done(null, existingUser);
        }
        // If user does not exist create a new user
        console.log('Creating new user...');
        const newUser = new User({
          method: 'google',
          google: {
            id: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
          },
        });
        await newUser.save();
        return done(null, newUser);
      } catch (error) {
        return done(error, false);
      }
    }),
  ));
};
