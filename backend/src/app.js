import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import 'dotenv/config'

import { errorLogger, errorResponder, failSafeHandler } from './middleware.js'
import DB from './connectDB.js'

import PatientRouter from './Routers/PatientsRouter.js'
import MetaRouter from './Routers/MetaRouter.js'

dotenv.config()

const app = express()

app.use(express.json())

app.use(cors())

app.use('/patients', PatientRouter)
app.use('/meta', MetaRouter)

app.use(errorLogger)
app.use(errorResponder)
app.use(failSafeHandler)

export default app
