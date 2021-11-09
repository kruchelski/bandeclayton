const logError = (fn, attempts = 'xx', error = {}) => {
  const errorBuilder = {
    fn,
    message: 'Unexpected error',
    attempts
  }
  
  if (error.message) {
    errorBuilder.message = error.message
  } else if (error && error[0] && error[0].message) {
    errorBuilder.message = error[0].message
  }
  const errorMsg = `[${errorBuilder.fn}] Attempt: ${errorBuilder.attempts} - ${errorBuilder.message}`
  console.error(errorMsg)
}

const logInfo = (fn, message = 'Success') => {
  const infoMessage = `[${fn}] ${message}`
  console.log(infoMessage)
}

const handleLog = (type = 'info', fn = 'general', logObject = null, attempts = null) => {
  switch (type) {
    case 'info':
      if (logObject && typeof logObject !== 'string') {
        logObject = JSON.stringify(logObject)
      }
      logInfo(fn, logObject)
      break
      case 'error':
      if (logObject && typeof logObject !== 'object') {
        logObject = { message: logObject }
      }
      logError(fn, attempts, logObject)
      break
      default:
      if (logObject && typeof logObject !== 'string') {
        logObject = JSON.stringify(logObject)
      }
      logInfo(fn, logObject)
  }
}

module.exports = {
  handleLog
}