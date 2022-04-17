import { Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import PatientList from './Components/PatientList'

import { QueryClientProvider, QueryClient } from 'react-query'
import NewPatientButton from './Components/NewPatientButton'
import NewPatientModal from './Components/NewPatientModal'
import PatientInformationStep from './Components/FormSteps/PatientInformationStep'
import PatientPictureStep from './Components/FormSteps/PatientPictureStep'
import ErrorModal from './Components/ErrorModal'
import ReviewInformationStep from './Components/FormSteps/ReviewInformationStep'
import LoadingScreen from './Components/LoadingScreen'

export const queryClient = new QueryClient()

// Allow all steps under NewPatientModal share the form data

function PatientApp() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [isErrorModalOpen, setErrorModalOpen] = useState(false)
  const [isLoadingScreenOpen, setLoadingScreenOpen] = useState(false)

  return (
    <>
      <LoadingScreen open={isLoadingScreenOpen} />
      <NewPatientButton setModalOpen={setModalOpen} />
      <ErrorModal
        isErrorModalOpen={isErrorModalOpen}
        setErrorModalOpen={setErrorModalOpen}
      />
      <NewPatientModal
        isModalOpen={isModalOpen}
        setErrorModalOpen={setErrorModalOpen}
        setModalOpen={setModalOpen}
        setLoadingScreenOpen={setLoadingScreenOpen}
      >
        <PatientInformationStep />
        <PatientPictureStep />
        <ReviewInformationStep />
      </NewPatientModal>
      <Container>
        <Grid container>
          <Grid item xs={12} md={10}>
            <PatientList />
          </Grid>
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
