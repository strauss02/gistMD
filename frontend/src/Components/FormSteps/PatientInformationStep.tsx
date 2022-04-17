import {
  Autocomplete,
  Box,
  Button,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material'
import React, { SyntheticEvent, useContext } from 'react'
import { useQuery } from 'react-query'
import { getLanguages } from '../../lib/api'
import { FormContext } from '../NewPatientModal'

function PatientInformationStep() {
  const formData = useContext(FormContext)

  const { data: languages } = useQuery<string[]>(['languages'], getLanguages, {
    initialData: [],
  })

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
  }

  return (
    <>
      <DialogTitle>New patient information</DialogTitle>
      <DialogContent>
        <FormControl
          component={'form'}
          onSubmit={handleSubmit}
          sx={{ width: '100%' }}
        >
          <TextField label="Full name" variant="standard" />
          <TextField
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0 }}
            type="number"
            label="Age"
            variant="standard"
          />
          {/* TODO: Seperate RadioGroup into a different component */}
          <Box>
            <RadioGroup
              sx={{ flexDirection: 'row', width: '100%' }}
              aria-labelledby="radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </Box>
          <Autocomplete
            id="combo-box-demo"
            options={languages || []}
            // sx={{ width: '100%' }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Spoken langauge"
                variant="standard"
              />
            )}
          />
          <TextField label="Medical Procedure " variant="standard" />
          <Button type="submit"> hi</Button>
        </FormControl>
      </DialogContent>
      {console.log(formData)}
    </>
  )
}

export default PatientInformationStep
