import express from 'express'

import Patient from './../DB/patient.js'
import { FORM_TEMPLATE, LANGUAGES } from '../constants.js'

const router = express.Router()

router.get('/lang', (req, res) => {
  res.send(LANGUAGES)
})

router.get('/form-template', (req, res) => {
  res.send(FORM_TEMPLATE)
})

export default router
