const repository = require('./user.repository');

module.exports = {
  find: async function (query) {
    return await repository.find(query);
  },
  findById: async function (id) {
    return await repository.findById(id);
  },
  create: async function (data) {
    return await repository.create(data);
  },
  update: async function (id, data) {
    return await repository.update(id, data);
  },
  delete: async function (id) {
    return await repository.delete(id);
  }
}