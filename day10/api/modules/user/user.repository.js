const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
}, {timestamps : true});

const UserModel = mongoose.model('User', UserSchema);

module.exports = {
  find: async function (query) {
    return await UserModel.find(query).exec();
  },
  findById: async function (id) {
    return await UserModel.findById(id).exec();
  },
  create: async function (data) {
    const newDocument = new UserModel(data);
    newDocument.save();
    return newDocument;
  },
  update: async function (id, data) {
    return await UserModel.findByIdAndUpdate(id, data).exec();
  },
  delete: async function (id) {
    return await UserModel.deleteOne({_id: id}).exec();
  }
}