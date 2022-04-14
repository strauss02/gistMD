class APIError extends Error {
  // parent error
  constructor(code, message) {
    super()
    this.code = code
    this.message = message
  }

  static MalformedPatientData(msg) {
    return new APIError(400, msg)
  }
}

export default {
  APIError,
}
