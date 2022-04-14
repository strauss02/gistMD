import express from 'express'

import Patient from './../DB/patient.js'

const router = express.Router()

router.get('/', (req, res) => {
  // send all patients
  Patient.find({}, (err, patients) => {
    if (err) {
      next(err)
    } else {
      res.send(patients)
    }
  })
})

router.post('/', (req, res, next) => {
  // req.body object is designed to fit exactly to Patient model creation scheme.
  Patient.create(req.body, (err, patient) => {
    if (err) {
      next(err)
    } else {
      res.send(patient)
    }
  })
})

export default router
