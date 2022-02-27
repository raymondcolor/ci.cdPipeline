/* eslint-disable no-throw-literal */
/* eslint-disable no-console */
const express = require('express');
const patientController = require('../models/patientsRegModels');

const router = express.Router();

// Router to get the registration page.
router.get('/', patientController.getRegPage);

// Get all the available patients.
router.get('/patients', patientController.getPatients);

// Router to post data from the form.
router.post('/', patientController.postPatients);

// Route to update a patient.
router.put('/patients/:id', patientController.updatePatient);

// Route to delete a patient.
router.delete('/patients/:id', patientController.deletePatient);
module.exports = router;
