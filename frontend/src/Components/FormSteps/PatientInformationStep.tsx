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
import React, { BaseSyntheticEvent, SyntheticEvent, useContext } from 'react'
import { useQuery } from 'react-query'
import { Form, getLanguages } from '../../lib/api'
import { FormContext, FormContextType } from '../NewPatientModal'

function PatientInformationStep() {
  // This hook handles edge cases where this component is rendered without a value from its context provider.
  const useFormContext = () => {
    const formContext = useContext(FormContext)
    if (!formContext)
      throw new Error('No FormContext.Provider found when calling formContext.')
    return formContext
  }

  const { formData, setFormData } = useFormContext()

  const { data: languages } = useQuery<string[]>(['languages'], getLanguages, {
    initialData: [],
  })

  function handleSubmit(e: BaseSyntheticEvent) {
    e.preventDefault()
    console.log(e.target)
  }

  function handleChange(e: BaseSyntheticEvent) {
    console.log(e)
    setFormData((prevData: any) => {
      const prevStateDup = { ...prevData }
      prevStateDup[e.target.name] = e.target.value
      return prevStateDup
    })
    console.log(formData)
  }

  return (
    <>
      <DialogTitle>New patient information</DialogTitle>
      <DialogContent>
        <FormControl
          onChange={handleChange}
          component={'form'}
          onSubmit={handleSubmit}
          sx={{ width: '100%' }}
        >
          <TextField label="Full name" variant="standard" name="name" />
          <TextField
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0 }}
            type="number"
            label="Age"
            variant="standard"
            name="age"
          />
          {/* TODO: Seperate RadioGroup into a different component */}
          <Box>
            <RadioGroup
              sx={{ flexDirection: 'row', width: '100%' }}
              aria-labelledby="radio-buttons-group-label"
              name="gender"
            >
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
            </RadioGroup>
          </Box>
          <Autocomplete
            // Changing the value in Autocomplete by clicking a list option does NOT trigger the parent form's 'onChange'. Its value would be recorded on submission.
            id="combo-box-demo"
            options={languages || []}
            // sx={{ width: '100%' }}
            renderInput={(params) => (
              <TextField
                name="language"
                {...params}
                label="Spoken langauge"
                variant="standard"
              />
            )}
          />
          <TextField
            label="Medical Procedure "
            variant="standard"
            name="procedure"
          />
        </FormControl>
        <Button onClick={() => console.log(formData)}>hey</Button>
      </DialogContent>
    </>
  )
}

export default PatientInformationStep
