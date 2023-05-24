const Model = require('../Models/codeModel');
const { Router } =require('express');
const getCode = require('../codeGenerator');
const router =Router();

router.post('/generate', (req, res) => {
    getCode((msg) => {
        console.log(msg);
        res.json({code: msg});
    })
})

router.post('/authenticate',(req, res) => {
    Model.findOne(req.body)
    .then((result) => {

        if(result) res.json(result);
        else res.status(401).json({message: 'Invalid Credentials' });

    })
    .catch((err) => {
        console.error(err);
        res.status(500).json(err);
        });
    });

module.exports = router;