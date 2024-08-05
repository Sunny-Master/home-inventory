import mongoose from "mongoose"

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const inventSchema = new Schema({
  room: { 
    type: String,
    required: true
  },
  things: Array,
  // managers: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {
  timestamps: true
})

const Invent = mongoose.model('Invent', inventSchema)

export {
  Invent
}