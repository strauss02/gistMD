import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import React from 'react'
import { Patient } from '../lib/api'

type PatientCardProps = {
  patient: Patient
}

function PatientCard({ patient }: PatientCardProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {patient.procedure}
        </Typography>
        <Typography variant="h5" component="div">
          {patient.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {patient.language}
        </Typography>
        <Typography variant="body2">{patient.gender}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default PatientCard
