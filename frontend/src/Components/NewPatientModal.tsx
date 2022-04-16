import { useTheme } from '@emotion/react'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MobileStepper,
  Typography,
  useMediaQuery,
} from '@mui/material'
import React from 'react'

type Props = {
  isModalOpen: boolean
  setModalOpen: Function
}

const steps = [
  {
    label: 'Add patient information',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
]

function NewPatientModule(props: Props) {
  const theme = useTheme()
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleClose = () => {
    props.setModalOpen(false)
  }
  return (
    <Dialog
      // fullScreen={fullScreen}
      open={props.isModalOpen}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {steps[activeStep].label}
      </DialogTitle>
      <DialogContent>
        {/*  */}
        <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
          <DialogContentText>{steps[activeStep].description}</DialogContentText>
        </Box>

        {/*  */}
      </DialogContent>
      <MobileStepper
        variant="text"
        steps={3}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === 3 - 1}
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

export default NewPatientModule
