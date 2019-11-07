const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  // findBySteps,
  add,
  // addStep,
  update,
  remove
};

function find() {
  return db('schemes');
};

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
};

// function findBySteps(steps) {
//   return db('schemes')
//     .where({ steps })
//     .first();
// };

async function add(scheme) {
  const [id] = await db('schemes')
    .insert(scheme);

  return findById(id);
};

function update(changes, id) { // Order matters, here; check the order in routers
  return db('schemes')
    .where({ id })
    .update(changes);
};

function remove(id) {
  return db('schemes')
    .where({ id })
    .delete();
};