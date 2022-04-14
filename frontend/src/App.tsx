import { Container, Grid } from '@mui/material'
import React from 'react'
import PatientList from './Components/PatientList'
import SideNavigation from './Components/SideNavigation'

import { useQuery } from 'react-query'
import { getPatients, Patient } from './lib/api'

function App() {
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

export default App
