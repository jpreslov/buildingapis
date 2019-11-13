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

router.put('/', (req, res) => {
    console.log(req.params.id)
    chirpStore.UpdateChirp()
})

router.delete('/', (req, res) => {
    chirpsStore.DeleteChirp(res.body)
})

module.exports = router;