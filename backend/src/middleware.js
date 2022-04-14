export function errorLogger(error, req, res, next) {
  // for logging errors
  console.error(error)
  next(error)
}

export function errorResponder(error, req, res, next) {
  // responding to client
  if (error.name === 'ValidationError') {
    res.status(400).json(error.message)
    return
  } else next(error) // forwarding exceptional case to fail-safe middleware
}

export function failSafeHandler(error, req, res, next) {
  // generic handler
  res.status(500).send('Something went wrong.')
}
