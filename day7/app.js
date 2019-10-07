const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/web28');

var CatModel = mongoose.model('Cat', {
  name: String,
  age: Number
});

CatModel.find({age: {$lte: 3}}).limit(3).skip(2).sort({name: 'desc'}).exec(function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})