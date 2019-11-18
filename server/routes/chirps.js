const express = require('express');
const chirpStore = require('../chirpStore');
const cors = require('cors');
const router = express.Router();

// router.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", '*');
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
//     next();
// });

router.get('/:id?', (req, res) => {
    //for if user requests specific chirp
    if (req.params.id){
        res.send(chirpStore.GetChirp(req.params.id))
    }
    //'get' method for all chirps
    res.send(chirpStore.GetChirps())
})
//post a chirp  
router.post('/', (req, res) => {
    console.log(req.body)
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200)
})
//update a chirp
router.put('/:id', (req, res) => {
    console.log();
    chirpStore.UpdateChirp(req.params.id, req.body)
})
//delete a chirp
router.delete('/:id', (req, res) => {
    // console.log(req.params.id)
    chirpStore.DeleteChirp(req.params.id)
})

module.exports = router;