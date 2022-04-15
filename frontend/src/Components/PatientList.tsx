import Box from '@mui/material/Box'
import PatientCard from './PatientCard'

import { useQuery } from 'react-query'
import { getPatients, Patient } from '../lib/api'

function PatientList() {
  const { data: patients } = useQuery<Patient[]>(['patients'], getPatients, {
    initialData: [],
  })
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: '100%',
      }}
    >
      {patients &&
        patients.map((patient) => {
          return <PatientCard key={patient._id} patient={patient} />
        })}
    </Box>
  )
}

export default PatientList
