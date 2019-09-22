const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/web28");

var CatModel = mongoose.model("Cat", {
    name: String,
    age: Number
});
for (let i = 0; i < 10; i++){
    var newKitty = new CatModel({
        name: "Kitty" + i,
        age: i
    })

    newKitty.save(function(err, data){
        if (err){
            console.log(err);
        }
    })
}

CatModel.find({}).exec(function(err, data){
    if (err) console.log(err);
    else console.log(data);
});
