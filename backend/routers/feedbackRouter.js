const Model = require('../Models/codeModel');
const { Router } = require('express');
const getCode = require('../feedbackRouter');
const router = Router();

router.post('/generate', (req, res) => {
  const { prompt } = req.body;
  getCode({ prompt }, (msg) => {
    console.log(msg);
    res.json({ code: msg });
  });
});

router.post('/add', (req, res) => {
  console.log(req.body);
  // res.send('Response from User Router');

  new Model(req.body).save()
  .then((result) => {
      res.json(result);
  })
  .catch((err) => {
      console.error(err);
      res.status(500).json(err);
  });
});

router.post('/authenticate', (req, res) => {
  Model.findOne(req.body)
    .then((result) => {
      if (result) res.json(result);
      else res.status(401).json({ message: 'Invalid Credentials' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get('/getbyuser/:id', (req, res) => {
  Model.find({user : req.params.id})
    .then((result) => {
      if (result) res.json(result);
      else res.status(401).json({ message: 'Invalid Credentials' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get('/getall', (req, res) => {
  Model.find({})
    .then((result) => {
      if (result) res.json(result);
      else res.status(401).json({ message: 'Invalid Credentials' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
