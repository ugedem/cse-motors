const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const app = express();
const port = 5500;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from /public
app.use('/public', express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'CSE Motors' });
});

app.get('/inventory', (req, res) => {
  res.render('inventory', { title: 'Inventory - CSE Motors' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us - CSE Motors' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact - CSE Motors' });
});

app.post('/thankyou', (req, res) => {
  const { name, email, message } = req.body;
  res.render('thankyou', { title: 'Thank You - CSE Motors', name, email, message });
});

app.listen(port, () => {
  console.log(`CSE Motors App running at http://localhost:${port}`);
});
