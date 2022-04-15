import { useTheme } from '@emotion/react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
} from '@mui/material'
import React from 'react'

type Props = {
  isModalOpen: boolean
  setModalOpen: Function
}
function NewPatientModule(props: Props) {
  const theme = useTheme()
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
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
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Disagree
        </Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default NewPatientModule
