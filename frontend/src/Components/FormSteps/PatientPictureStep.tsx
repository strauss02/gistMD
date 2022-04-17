import {
  Avatar,
  Button,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { BaseSyntheticEvent, SyntheticEvent } from 'react'
import { useFormContext } from './PatientInformationStep'

function PatientPictureStep() {
  const { formData, setFormData, autocompleteRef } = useFormContext()

  function handleChange(e: BaseSyntheticEvent) {
    setFormData((prevData: any) => {
      const prevDataDup = { ...prevData }
      prevDataDup['imgSrc'] = e.target.value
      return prevDataDup
    })
  }

  return (
    <div>
      <DialogTitle>Upload patient picture</DialogTitle>
      <DialogContent>
        <Box sx={{ justifyContent: 'center', display: 'Flex' }}>
          <Avatar
            sx={{ width: '5rem', height: '5rem', marginBottom: '2rem' }}
            src={formData.imgSrc}
          />
        </Box>
        <TextField
          onChange={handleChange}
          value={formData.imgSrc}
          label="Image URL"
          variant="standard"
          name="imgSrc"
        />
        <DialogContentText>You may skip this step</DialogContentText>
      </DialogContent>
    </div>
  )
}

export default PatientPictureStep
