require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const { router } = require('./routers/indexRouter')
mongoose.Promise = global.Promise

// Setting Up Database Connection
mongoose.connect(
    process.env.DBURL,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
      console.log('Connected to Database');
    }
  );
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
  
// Listen for database errors
mongoose.connection.on('error',console.error.bind(console, 'connection error'));

// Setting Up Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Setting up Cookies
app.use(cookieParser())

// Static Files
app.use('/static', express.static('public'))

// Rendering Engine
app.set('view engine', 'ejs');

// Routes
app.use('/' ,router);

// Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error');
  console.log("Error Handler- Uncaught Error:" + err.message);
  console.log(err.stack);
});

// Open Server
app.listen(process.env.PORT || 5000, () => {console.log(`Server listening on ${process.env.PORT || 5000}`)})