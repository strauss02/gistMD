import { Fab } from '@mui/material'
import React from 'react'

function NewPatientButton() {
  return (
    <Fab
      sx={{
        position: 'sticky',
        top: '89%',
        left: '81%',
        margin: '0 1rem 1rem 0',
      }}
      variant="extended"
      color={'primary'}
    >
      NEW PATIENT
    </Fab>
  )
}

export default NewPatientButton
