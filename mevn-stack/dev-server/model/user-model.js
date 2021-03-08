import mongoose from 'mongoose';
import { StringUtil } from '../utilities/string-util';
import bcrypt from 'bcrypt-nodejs';

const userSchema = new mongoose.Schema({
  username: String,
  first: String,
  last: String,
  password: String,
});
userSchema.set('timestamps', true);
userSchema.virtual('fullName').get(function() {
  const first = StringUtil.capitalize(this.first.toLowerCase());
  const last = StringUtil.capitalize(this.first.toLowerCase());

  return `${first} ${last}`;
});

userSchema.pre('save', function(next) {
  this.username = this.username.toLowerCase();
  this.first = this.username.toLowerCase();
  this.last = this.username.toLowerCase();
  const unsafePassword = this.password;
  this.password = bcrypt.hashSync(unsafePassword);
  next();
});

export default mongoose.model('user', true);
