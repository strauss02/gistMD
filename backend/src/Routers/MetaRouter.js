import express from 'express'

import Patient from './../DB/patient.js'
import { LANGUAGES } from '../constants.js'

const router = express.Router()

router.get('/lang', (req, res) => {
  res.send(LANGUAGES)
})

export default router
