import { Avatar, DialogContent, DialogTitle, Typography } from '@mui/material'
import { Box } from '@mui/system'
import MaleIcon from '@mui/icons-material/Male'
import { useFormContext } from '../../hooks/useFormContext'
import FemaleIcon from '@mui/icons-material/Female'
function ReviewInformationStep() {
  const { formData } = useFormContext()

  return (
    <>
      <DialogTitle>Review form information</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            justifyContent: 'center',
            display: 'Flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{ width: '5rem', height: '5rem', marginBottom: '2rem' }}
            src={formData.imgSrc}
          />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" component="div">
              {formData.name}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', m: '0.7rem 0' }}>
            <Typography color="text.secondary" sx={{ mr: '0.4rem' }}>
              {` ${formData.age}, ${formData.gender}`}
            </Typography>
            {formData.gender === 'Male' ? (
              <MaleIcon style={{ color: '#5b70b4' }} />
            ) : (
              <FemaleIcon style={{ color: '#cc94d4' }} />
            )}
          </Box>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {formData.procedure}
          </Typography>
          <Typography variant="body2">{formData.language}</Typography>
        </Box>
      </DialogContent>
    </>
  )
}

export default ReviewInformationStep
