const express = require('express');
const router = express.Router();
const {validateCredentials, Signup, Profile} = require('./controllers/users');

router.post('/login', validateCredentials);
router.post('/singup', Signup);
router.post('/videos', Profile);

module.exports = router;