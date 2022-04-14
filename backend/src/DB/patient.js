import mongoose from 'mongoose'
import { LANGUAGES } from '../constants.js'

const Schema = mongoose.Schema

let patientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      enum: {
        values: LANGUAGES,
        message:
          '{VALUE} is not a recognized language. Language must start with an uppercase letter, and exist within the LANGAUGES list stored on the server.',
      },
      required: true,
    },
    age: {
      type: Number,
      min: [0, 'Age has to be at least 0, got {VALUE}'],
      required: true,
    },
    procedure: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female'],
      required: true,
    },
  },
  { collection: 'Patients' }
)

export default mongoose.model('patient', patientSchema)
