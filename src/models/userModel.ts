import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  google: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
  },
});

const User = mongoose.model('User', UserSchema);

export default User;
