import { CircularProgress, Container, Modal } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'fit-content',
}

type Props = {
  open: boolean
}

function LoadingScreen(props: Props) {
  return (
    <Modal open={props.open}>
      <Container sx={style}>
        <CircularProgress size={'5rem'} />
      </Container>
    </Modal>
  )
}

export default LoadingScreen
