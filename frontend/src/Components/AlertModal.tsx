import { Dialog, DialogContent, Typography } from '@mui/material'
import React, { useState } from 'react'

type Props = {
  isAlertModalOpen: boolean
  setAlertModalOpen: Function
}

function AlertModal(props: Props) {
  const handleClose = () => {
    props.setAlertModalOpen(false)
  }

  return (
    <div>
      <Dialog open={props.isAlertModalOpen} onClose={handleClose}>
        <DialogContent>
          <Typography>Patient added successfully!</Typography>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AlertModal
