const express = require('express')
const path = require('path');
const mongoose = require('mongoose');
const { urlencoded } = require('body-parser');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

// Creating the mongoose connection.
// mongoose.connect(process.env.DATABASE, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // useCreateIndex: true,
// });

// mongoose.connection
//   .on('open', () => {
//     console.log('Mongoose connection currently open');
//   })
//   .on('error', (err) => {
//     console.log(`Connection error: ${err.message}`);
//   });


// Requiring the models.
// const PatientsReg = require('./models/patientsRegModels')

// Requiring the routes.
// const PatientRegRoutes = require('./routes/patientsRegRoutes');

// Configutations.
app.set('view engine', 'pug');
app.set('views', path.join(__dirname + '/views'));

// Middleware.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/public')));
app.use('/public/imagefiles', express.static(__dirname + '/public/imagefiles'));



// Routes for the project.
// app.use('/', PatientRegRoutes);
app.use('/', (req, res) =>{
  res.render('index.pug')
})

// Server port
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

module.exports = app;