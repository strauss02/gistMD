import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  // send all patients
})

router.post('/', (req, res) => {
  // Create new patient
  /*
    patientName
    patientGender
    patientAge
    patientLanguage
    patientProcedure
  */
})

export default router
