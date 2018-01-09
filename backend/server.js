// dependancies
const express = require('express');

const bodyParser = require('body-parser'),
      path = require('path'),
      cors = require('cors'),
      passport = require('passport'),
      dbconfig = require('./config/db-config');

const users = require('./routes/users'),
      thumbbuddies = require('./routes/thumbbuddies'),
      species = require('./routes/species'),
      battles = require('./routes/battles'),
      battlegrounds = require('./routes/battlegrounds'),
      tournaments = require('./routes/tournaments')

// db Connection

// initialize app
const port = 3000; //dev  process.env.PORT || 8080 //production
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport-config')(passport);

// routes
app.use('/users', users)
app.use('/tb', thumbbuddies)
app.use('/species', species)
app.use('/battles', battles)
app.use('/battlegrounds', battlegrounds)

//production public path
// const publicpath = 'public/index.html';

// initial gets
app.get('/', (req, res) => {
  res.send('intial get is working!');
  // res.sendfile(path.join(__dirname, publicpath));
});
app.get('*', (req, res) => {
  res.send('default route is working!')
  // res.sendfile(path.join(__dirname, publicpath));
})


//start server
app.listen(port, () => {
  console.log('Listening on port ' + port);
});



/*

*/
