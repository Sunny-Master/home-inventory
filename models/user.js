import mongoose from "mongoose"

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const userSchema = new Schema({
  userName: String,
  things: Array,
})

// Compile the schema into a model and export it
const User = mongoose.model('User', userSchema)

export {
  User
}