const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const inventoryRoutes = require('./routes/inventory');
const aboutRoutes = require('./routes/about');
const contactRoutes = require('./routes/contact');
const indexRoutes = require('./routes/index');
const errorRoutes = require('./routes/error');

const { handle404, handle500 } = require('./utilities/errorHandler');

const app = express();
const port = 5500;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.locals.currentPage = (
    req.path === '/' ? 'home' :
    req.path.startsWith('/inventory') ? 'inventory' :
    req.path.startsWith('/about') ? 'about' :
    req.path.startsWith('/contact') ? 'contact' :
    ''
  );
  next();
});

app.use('/', indexRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/about', aboutRoutes);
app.use('/contact', contactRoutes);
app.use('/', errorRoutes);

app.get('/trigger500', (req, res) => {
  throw new Error('Manually triggered 500 error');
});

app.use(handle404);
app.use(handle500);

app.listen(port, () => {
  console.log(` CSE Motors running at http://localhost:${port}`);
});
