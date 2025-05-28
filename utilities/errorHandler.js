exports.handle404 = (req, res) => {
  res.status(404).render('error', {
    title: '404 - Page Not Found',
    message: 'Sorry, the page you are looking for does not exist.'
  });
};

exports.handle500 = (err, req, res, next) => {
  console.error('500 Error:', err.stack);
  res.status(500).render('error', {
    title: '500 - Internal Server Error',
    message: 'Something went wrong on the server. Please try again later.'
  });
};
