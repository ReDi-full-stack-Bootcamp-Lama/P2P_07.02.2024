//User.js
import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  firstName: { 
    type: String, 
    required: false,
  },
  lastName: { 
    type: String, 
    required: false 
  },
  email: { 
    type: String, 
    required: [true,"Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email"]
  },
  password: {
    type: String,
    required: [true, "Please enter a valid password"],
    minlength: [6, "Minimum password length must be 6 characters"]
  },
  dateOfBirth: {
    type: Date,
    required: [false, "Please enter your date of birth"]
  },
  bio: {
    type: String,
    required: false
  },
  /*
 gender: {
    type: String,
    enum: ["Male", "Female", "Other"]
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    postalCode: { type: String, required: true}
  },
  phone: { type: String },
  avatar: { type: String }
  */
}, { versionKey: false });
const User = mongoose.model("User", userSchema);

export { User, userSchema };