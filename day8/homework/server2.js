const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/web28');

var app = express();
const port = process.env.PORT || 3000;

const CatSchema = mongoose.Schema({
  name: {
    type: String,
  },
  age: Number,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const CatModel = mongoose.model('Cat', CatSchema);

const UserSchema = mongoose.Schema({
  name: {
    type: String,
  }
})

const UserModel = mongoose.model("User", UserSchema);

app.use(bodyParser.json());

app.post('/cat', function (request, response) {
  const input = request.body;
  let newCat = new CatModel({
    name: input.name,
    age: input.age,
  });
  newCat.save(function(err, data){
    if (err) {
      response.json({
        code: 0,
        err: err
      });
    } else {
      response.json({
        code: 1,
        data: data,
      });
    }
  })
})

app.get('/cat', function (request, response) {
  const input = request.query;
  CatModel.find(input).populate('userId').exec(function(err, data) {
    if (err) {
      response.json({
        code: 0,
        err: err
      });
    } else {
      response.json({
        code: 1,
        data: data,
      });
    }
  })
})

app.put('/cat/:id', function(req, res) {
  const id = req.params.id;
  const input = req.body;
  if (!input.name && !input.age) {
    res.json({
      code: 0,
      err: "Missing input"
    });
  } else {
    CatModel.updateOne({_id: id}, {$set: input}).exec(function(err, data) {
      if (err) {
        res.json({
          code: 0,
          err: err
        });
      } else {
        res.json({
          code: 1,
          data: data,
        });
      }
    })
  }
})

app.delete('/cat/:id', function (req, res) {
  const id = req.params.id;
  CatModel.deleteOne({_id: id}).exec(function(err, data){
    if (err) {
      res.json({
        code: 0,
        err: err
      });
    } else {
      res.json({
        code: 1,
        data: data,
      });
    }
  })
})

const server = app.listen(port, function () {
  console.log(`Server run at localhost:${port}`);
})
