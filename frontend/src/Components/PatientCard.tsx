import { Avatar, Box, Card, CardContent, Typography } from '@mui/material'
import MaleIcon from '@mui/icons-material/Male'
import FemaleIcon from '@mui/icons-material/Female'
import { Patient } from '../lib/api'

type PatientCardProps = {
  patient: Patient
}

function PatientCard({ patient }: PatientCardProps) {
  return (
    <Card
      sx={{
        margin: '0.7rem',
        borderRadius: '16px',
      }}
    >
      <CardContent>
        {/* Name and Avatar */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={patient.imgSrc} sx={{ marginRight: '0.8rem' }} />
          <Typography variant="h5" component="div">
            {patient.name}
          </Typography>
        </Box>
        {/* Age and Gender */}
        <Box sx={{ display: 'flex', alignItems: 'center', m: '0.7rem 0' }}>
          <Typography color="text.secondary" sx={{ mr: '0.4rem' }}>
            {` ${patient.age}, ${patient.gender}`}
          </Typography>
          {patient.gender === 'Male' ? (
            <MaleIcon style={{ color: '#5b70b4' }} />
          ) : (
            <FemaleIcon style={{ color: '#cc94d4' }} />
          )}
        </Box>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {patient.procedure}
        </Typography>
        <Typography variant="body2">{patient.language}</Typography>
      </CardContent>
    </Card>
  )
}

export default PatientCard
