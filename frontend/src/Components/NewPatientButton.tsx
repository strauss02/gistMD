import { Fab } from '@mui/material'
import React from 'react'

type Props = {
  setModalOpen: Function
}

function NewPatientButton(props: Props) {
  return (
    <Fab
      onClick={() => props.setModalOpen(true)}
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
