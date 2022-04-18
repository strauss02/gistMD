import { Dialog, DialogContent, Typography } from '@mui/material'

type Props = {
  isAlertModalOpen: boolean
  setAlertModalOpen: Function
  text?: string
}

function AlertModal(props: Props) {
  const handleClose = () => {
    props.setAlertModalOpen(false)
  }

  return (
    <div>
      <Dialog open={props.isAlertModalOpen} onClose={handleClose}>
        <DialogContent>
          <Typography>{props.text || `Patient added successfully!`}</Typography>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AlertModal
