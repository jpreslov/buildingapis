const express = require('express');
const chirpsRouter = require('./chirps');
const cors = require('cors');
const router = express.Router();

// const app = express();

router.use('/chirps', chirpsRouter)

module.exports = router;