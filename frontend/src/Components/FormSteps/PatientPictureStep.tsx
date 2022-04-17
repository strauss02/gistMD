import { Button, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import { useFormContext } from './PatientInformationStep'

function PatientPictureStep() {
  const { formData, setFormData, autocompleteRef } = useFormContext()

  return (
    <div>
      <DialogTitle>PatientPictureStep</DialogTitle>
      <DialogContent>
        <Button onClick={() => console.log(formData)}>Check state</Button>
      </DialogContent>
    </div>
  )
}

export default PatientPictureStep
