import express from 'express'

import Patient from './../DB/patient.js'

const router = express.Router()

router.get('/', (req, res) => {
  // send all patients
  Patient.find({}, (err, patients) => {
    res.send(patients)
  })
})

router.post('/', (req, res, next) => {
  // Create new patient
  /*
    patientName
    patientGender
    patientAge
    patientLanguage
    patientProcedure
  */
  console.log(req.body)
  const { gender, name, language, age, procedure } = req.body
  Patient.create(
    { gender, name, language, age, procedure },
    function (err, small) {
      if (err) return next(err)
    }
  )
  res.send('wow')
})

export default router
