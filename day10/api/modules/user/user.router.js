const express = require('express');
const service = require('./user.service.js');

var router = express.Router();

router.get('/', async function (req, res) {
  try {
    const data = await service.find(req.query);
    res.status(200).send({
      data: data,
    });
  } catch (err) {
    res.status(500).send({
      error: err.message,
    })
  }
})

module.exports = router;
