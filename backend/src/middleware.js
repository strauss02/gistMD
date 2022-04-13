export function errorLogger(error, req, res, next) {
  // for logging errors
  console.error(error)
  next(error)
}

export function errorResponder(error, req, res, next) {
  // responding to client
  if (error.type == 'redirect') res.redirect('/error')
  else if (error.type == 'time-out')
    // arbitrary condition check
    res.status(408).send(error)
  else next(error) // forwarding exceptional case to fail-safe middleware
}

export function failSafeHandler(error, req, res, next) {
  // generic handler
  res.status(500).send(error)
}
