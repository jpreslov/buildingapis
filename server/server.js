const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');
const router = express.Router();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);

module.exports = router;

app.listen((3000), () => {
    console.log('Now listening on port 3000')
});