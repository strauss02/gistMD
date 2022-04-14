import React from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import PatientCard from './PatientCard'

function PatientList() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
      }}
    >
      <PatientCard />
    </Box>
  )
}

export default PatientList
