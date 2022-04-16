import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Box, Button, Dialog, MobileStepper } from '@mui/material'
import React from 'react'

type Props = {
  isModalOpen: boolean
  setModalOpen: Function
  children: React.ReactNode
}

function NewPatientModal(props: Props) {
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [activeStep, setActiveStep] = React.useState(0)
  const [formData, setFormData] = React.useState({})

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleClose = () => {
    props.setModalOpen(false)
  }
  const steps = React.Children.toArray(props.children)
  return (
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
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Dialog>
  )
}

export default NewPatientModal
