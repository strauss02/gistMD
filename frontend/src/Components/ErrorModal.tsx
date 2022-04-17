import { Dialog, DialogContent, Typography } from '@mui/material'
import React, { useState } from 'react'

type Props = {
  isErrorModalOpen: boolean
  setErrorModalOpen: Function
}

function ErrorModal(props: Props) {
  const handleClose = () => {
    props.setErrorModalOpen(false)
  }

  return (
    <div>
      <Dialog open={props.isErrorModalOpen} onClose={handleClose}>
        <DialogContent>
          <Typography>an error occured!</Typography>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ErrorModal
