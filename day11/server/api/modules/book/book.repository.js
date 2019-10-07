import { Schema, model } from "mongoose";

const BookSchema = Schema({
    title: String,
    category: String,
    description: String,
    author: String,
});

const BookModel = model("book", BookSchema);

const find = async function (query) {
    return await BookModel.find(query);
}

const findById = async function (id) {
    return await BookModel.findById(id);
}

const create = async function (data) {
    const newDocument = new BookModel(data);
    return await newDocument.save();
}

const update = async function (id, data) {
    return await BookModel.findByIdAndUpdate(id, { $set: data });
}

const deleteById = async function (id) {
    return await BookModel.findOneAndDelete(id);
}

module.exports = {
    find: find,
    findById: findById,
    create: create,
    update: update,
    deleteById: deleteById,
};