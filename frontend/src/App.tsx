import { Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import PatientList from './Components/PatientList'
import SideNavigation from './Components/SideNavigation'

import { QueryClientProvider, QueryClient } from 'react-query'
import NewPatientButton from './Components/NewPatientButton'
import NewPatientModule from './Components/NewPatientModal'

const queryClient = new QueryClient()

function PatientApp() {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <NewPatientButton setModalOpen={setModalOpen} />
      <NewPatientModule isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      <Container>
        <Grid container>
          <Grid item xs={0} md={2}>
            <SideNavigation />
          </Grid>
          <Grid item xs={12} md={10}>
            <PatientList />
          </Grid>
        </Grid>
        {/* Floating Action Button */}
      </Container>
    </>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PatientApp />
    </QueryClientProvider>
  )
}

export default App
