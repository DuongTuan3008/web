import repository from "./book.repository.js";

find = async function (query) {
    return await repository.find();
}

