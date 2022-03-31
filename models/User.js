import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minLength: 3,
    maxLength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide password"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email"
    },
    minLength: 6
  },
  lastName: {
    type: String,
    maxLength: 20,
    trim: true,
    default: "lastName",
  },
  location: {
    type: String,
    trim: true,
    maxLength: 20,
    default: 'my city',
  }
});

export default mongoose.model('User', UserSchema);
