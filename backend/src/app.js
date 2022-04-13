import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import PatientRouter from './Routers/PatientsRouter.js'

dotenv.config()

const app = express()

app.use(cors())

app.use('/patients', PatientRouter)

app.use((error, req, res, next) => {
  console.log('Error Handling Middleware called')
  console.log('Path: ', req.path)
  console.error('Error: ', error)

  if (error.type == 'redirect') res.redirect('/error')
  else if (error.type == 'time-out')
    // arbitrary condition check
    res.status(408).send(error)
  else res.status(500).send(error)
})

export default app
