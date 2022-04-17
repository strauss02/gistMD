import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Box, Button, Dialog, MobileStepper } from '@mui/material'
import {
  useState,
  ReactNode,
  createContext,
  Children,
  useEffect,
  createRef,
  RefObject,
} from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Form, getFormTemplate, createPatient } from '../lib/api'
import LoadingScreen from './LoadingScreen'

type Props = {
  isModalOpen: boolean
  setModalOpen: Function
  setErrorModalOpen: Function
  setLoadingScreenOpen: Function
  children: ReactNode
}

export type FormContextType = {
  setFormData: Function
  formData: Form
  setLoadingScreenOpen: any
  autocompleteRef: RefObject<HTMLElement> | RefObject<unknown>
  setFormValid: Function
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
  const [isFormValid, setFormValid] = useState(false)

  const queryClient = useQueryClient()

  const autocompleteRef = createRef() as any

  const {
    isLoading,
    isError,
    data: formTemplate,
  } = useQuery<any>(['formTemplate'], getFormTemplate, {})
  // Once formTemplate has loaded, assign it to formData. This is for the porpuse of having an empty form as an initial value
  useEffect(() => {
    if (formTemplate) {
      setFormData(formTemplate)
    }
  }, [formTemplate])

  const handleNext = () => {
    // Clicking 'next' while on Patient Information step will also set the language field in the form
    if (activeStep === 0) {
      setFormData((prevData) => {
        const prevDataDup = { ...prevData }
        prevDataDup['language'] = autocompleteRef.current.value
        return prevDataDup
      })
    }
    if (activeStep === steps.length - 1) {
      // show loading screen
      setLoadingScreenOpen(true)
      //send form
      createMutation.mutate(formData)

      return
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const createMutation = useMutation(createPatient, {
    onSuccess: () => {
      queryClient.invalidateQueries(['patients'])
      // reset form
      setFormData(formTemplate as Form)
    },
    onSettled: () => {
      props.setModalOpen(false)
      setLoadingScreenOpen(false)
      setActiveStep(0)
    },
  })

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleClose = () => {
    props.setModalOpen(false)
  }
  const steps = Children.toArray(props.children)

  if (isLoading) {
    return <LoadingScreen open={true} />
  }

  if (isError) {
    return props.setErrorModalOpen(true)
  }

  const { setLoadingScreenOpen } = props

  return (
    //This context will be avaliable to all steps inside the modal
    <FormContext.Provider
      value={{
        setFormData,
        formData,
        autocompleteRef,
        setLoadingScreenOpen,
        setFormValid,
      }}
    >
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
            <Button size="small" onClick={handleNext} disabled={!isFormValid}>
              {activeStep === steps.length - 1 ? 'Submit ' : 'Next'}
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
