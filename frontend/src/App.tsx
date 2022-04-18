import { Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import PatientList from './Components/PatientList'
import { QueryClientProvider, QueryClient } from 'react-query'
import NewPatientButton from './Components/NewPatientButton'
import NewPatientModal from './Components/NewPatientModal'
import PatientInformationStep from './Components/FormSteps/PatientInformationStep'
import PatientPictureStep from './Components/FormSteps/PatientPictureStep'
import AlertModal from './Components/AlertModal'
import ReviewInformationStep from './Components/FormSteps/ReviewInformationStep'
import LoadingScreen from './Components/LoadingScreen'

export const queryClient = new QueryClient()

function PatientApp() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [isAlertModalOpen, setAlertModalOpen] = useState(false)
  const [isLoadingScreenOpen, setLoadingScreenOpen] = useState(false)
  const [alertModalText, setAlertModalText] = useState('')

  return (
    <>
      <LoadingScreen open={isLoadingScreenOpen} />
      <NewPatientButton setModalOpen={setModalOpen} />
      <AlertModal
        text={alertModalText}
        isAlertModalOpen={isAlertModalOpen}
        setAlertModalOpen={setAlertModalOpen}
      />
      <NewPatientModal
        setAlertModalText={setAlertModalText}
        isModalOpen={isModalOpen}
        setAlertModalOpen={setAlertModalOpen}
        setModalOpen={setModalOpen}
        setLoadingScreenOpen={setLoadingScreenOpen}
      >
        <PatientInformationStep />
        <PatientPictureStep />
        <ReviewInformationStep />
      </NewPatientModal>
      <Container>
        <Grid container>
          <Grid item xs={0} lg={2} />
          <Grid item xs={12} lg={8}>
            <PatientList />
          </Grid>
          <Grid item xs={0} lg={2} />
        </Grid>
      </Container>
    </>
  )
}

// Wrapping is required by React Query
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PatientApp />
    </QueryClientProvider>
  )
}

export default App
