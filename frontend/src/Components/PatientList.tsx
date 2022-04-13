import React from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

function PatientList() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={3} />
    </Box>
  )
}

export default PatientList
