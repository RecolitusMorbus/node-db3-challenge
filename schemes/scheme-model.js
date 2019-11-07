const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findSteps,
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

function findSteps(id) {
  console.log(id);
  return db('schemes')
    .join('steps', 'schemes.id', 'steps.scheme_id')
    .where('scheme_id', id)
    .select('steps.step_number', 'instructions')
    .orderBy('step_number', 'asc');
};

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