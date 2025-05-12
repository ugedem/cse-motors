const express = require('express');
const path = require('path');

const app = express();
const port = 5500;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files under /public path
app.use('/public', express.static(path.join(__dirname, 'public')));

// Load routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Start server
app.listen(port, () => {
  console.log(`CSE Motors App is running on http://localhost:${port}`);
});
