// Handle 404 Not Found
function notFound(req, res, next) {
  res.status(404).render('error', {
    title: '404 Not Found',
    errorCode: 404,
    errorMessage: 'Page Not Found'
  });
}

// Handle 500 Internal Server Error
function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).render('error', {
    title: '500 Error',
    errorCode: 500,
    errorMessage: 'Something went wrong. Please try again later.'
  });
}

module.exports = {
  notFound,
  errorHandler
};
