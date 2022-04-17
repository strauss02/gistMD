import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Box, Button, Dialog, MobileStepper } from '@mui/material'
import { useState, ReactNode, createContext, Children, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Form, getFormTemplate } from '../lib/api'
import LoadingScreen from './LoadingScreen'

type Props = {
  isModalOpen: boolean
  setModalOpen: Function
  setErrorModalOpen: Function
  children: ReactNode
}

export type FormContextType = {
  setFormData: Function
  formData: Form
}

// For edge cases where form isn't loaded
const fallbackForm = {
  age: 0,
  gender: '',
  imgSrc: '',
  language: '',
  name: '',
  procedure: '',
}

// undefined exists to satisfy the condition where FormContext exists in isolation, virtually not containing any value
export const FormContext = createContext<FormContextType | undefined>(undefined)

function NewPatientModal(props: Props) {
  const [formData, setFormData] = useState(fallbackForm as Form)
  const [activeStep, setActiveStep] = useState(0)

  const { isLoading, isError, data } = useQuery<any>(
    ['formTemplate'],
    getFormTemplate,
    {}
  )
  // Once formTemplate has loaded, assign it to formData. This is for the porpuse of having an empty form as an initial value
  useEffect(() => {
    if (data) {
      setFormData(data)
    }
  }, [data])

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleClose = () => {
    props.setModalOpen(false)
  }
  const steps = Children.toArray(props.children)

  if (isLoading) {
    return <LoadingScreen />
  }

  if (isError) {
    return props.setErrorModalOpen(true)
  }

  return (
    //This context will be avaliable to all steps inside the modal
    <FormContext.Provider value={{ setFormData, formData }}>
      <Dialog
        // fullScreen={fullScreen}
        open={props.isModalOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Box sx={{ minHeight: 255, maxWidth: 400, width: '100%', p: 2 }}>
          {steps[activeStep]}
        </Box>
        {/* TODO : Seperate MobileStepper as component */}
        <MobileStepper
          variant="text"
          steps={steps.length}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </Dialog>
    </FormContext.Provider>
  )
}

export default NewPatientModal
