const express = require('express');
const chirpStore = require('../chirpStore');
const cors = require('cors');
const router = express.Router();

router.get('/:id?', (req, res) => {
    //for if user requests specific chirp
    if (req.params.id){
        res.send(chirpStore.GetChirp(req.params.id))
    }
    //'get' method for all chirps
    res.send(chirpStore.GetChirps())
})

router.post('/', (req, res) => {
    console.log(req.body)
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200)
})

router.put('/:id', (req, res) => {
    console.log();
    chirpStore.UpdateChirp(req.params.id, req.body)
})

router.delete('/:id', (req, res) => {
    // console.log(req.params.id)
    chirpStore.DeleteChirp(req.params.id)
})

module.exports = router;