
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('todos', function(table) {
    table.increments('id')
    table.string('description')
    table.boolean('done')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('todos')
};
