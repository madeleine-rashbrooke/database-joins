
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('usersTodos', function(table) {
    table.integer('users_id')
    table.integer('task_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('usersTodos')
};
