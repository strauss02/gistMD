import mongoose from 'mongoose'
import { LANGUAGES } from '../constants'

const Schema = mongoose.Schema

let patientSchema = new Schema(
  {
    name: {
      type: String,
    },
    language: {
      type: String,
      enum: LANGUAGES,
    },
    age: {
      type: Number,
    },
    procedure: {
      type: String,
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
    },
  },
  { collection: 'Entries' }
)

export default mongoose.model('patient', patientSchema)
