import {
  Autocomplete,
  Box,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material'
import { BaseSyntheticEvent } from 'react'
import { useQuery } from 'react-query'
import { getLanguages } from '../../lib/api'
import validator from '../../validator'
import { useFormContext } from '../../hooks/useFormContext'

// This hook handles edge cases where this component is rendered without a value from its context provider.
// Bound to happen only where it is tested in isolation, not in production env.

function PatientInformationStep() {
  const { formData, setFormData, autocompleteRef, setFormValid } =
    useFormContext()

  const { data: languages } = useQuery<string[]>(['languages'], getLanguages, {
    initialData: [],
  })

  function handleSubmit(e: BaseSyntheticEvent) {
    e.preventDefault()
  }

  function handleChange(e: BaseSyntheticEvent) {
    setFormData((prevData: any) => {
      const prevStateDup = { ...prevData }
      prevStateDup[e.target.name] = e.target.value
      setFormValid(validator(prevStateDup, autocompleteRef))
      return prevStateDup
    })
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
          <TextField
            label="Full name"
            variant="standard"
            name="name"
            value={formData.name}
          />
          <TextField
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0 }}
            value={formData.age}
            type="number"
            label="Age"
            variant="standard"
            name="age"
          />
          {/* TODO: Seperate RadioGroup into a different component */}
          <Box>
            <RadioGroup
              sx={{ flexDirection: 'row', width: '100%', marginTop: '2rem' }}
              aria-labelledby="radio-buttons-group-label"
              name="gender"
              value={formData.gender}
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
            // Changing the value in Autocomplete by clicking a list option does NOT trigger the parent form's 'onChange'. Its value would be recorded on submission to prevent buggy behaviour.
            id="combo-box-demo"
            options={languages || []}
            // sx={{ width: '100%' }}
            renderInput={(params) => (
              <TextField
                onSelect={handleChange}
                inputRef={autocompleteRef}
                name="language"
                {...params}
                label="Spoken langauge"
                variant="standard"
              />
            )}
          />
          <TextField
            value={formData.procedure}
            label="Medical Procedure "
            variant="standard"
            name="procedure"
          />
        </FormControl>
      </DialogContent>
    </>
  )
}

export default PatientInformationStep
