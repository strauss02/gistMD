import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import { errorLogger, errorResponder, failSafeHandler } from './middleware.js'

import PatientRouter from './Routers/PatientsRouter.js'

dotenv.config()

const app = express()

app.use(cors())

app.use('/patients', PatientRouter)

app.use(errorLogger)
app.use(errorResponder)
app.use(failSafeHandler)

export default app
