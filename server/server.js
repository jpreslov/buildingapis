const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');
const router = express.Router();
const app = express();

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", '*');
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
//     next();
// });

app.use(cors());
app.use(express.json());
app.use(express.static('client'));
app.use('/api', apiRouter);

module.exports = router;

app.listen((3000), () => {
    console.log('Now listening on port 3000')
});