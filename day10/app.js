const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const routers = require('./routers');
const configs = require('./configs');
mongoose.connect(configs.mongoConnectionString);

const app = express();
const PORT = 3000;

app.use(bodyParse.json());
routers(app);



app.listen(PORT, function () {
  console.log(`Server run at localhost:${PORT}`);
})