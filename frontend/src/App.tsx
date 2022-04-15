import { Container, Grid } from '@mui/material'
import React from 'react'
import PatientList from './Components/PatientList'
import SideNavigation from './Components/SideNavigation'

import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

function PatientApp() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={0} md={2}>
          <SideNavigation />
        </Grid>
        <Grid item xs={12} md={10}>
          <PatientList />
        </Grid>
      </Grid>
    </Container>
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
