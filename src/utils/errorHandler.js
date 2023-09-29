const errorHandler = (exception) => {
  const message =
    typeof exception === 'string'
      ? exception.toUpperCase()
      : exception instanceof Error
      ? exception.message
      : 'Something was wrong';

  return message;
}

module.exports = {
  errorHandler,
};