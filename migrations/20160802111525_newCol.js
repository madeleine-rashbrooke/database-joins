
exports.up = function(knex, Promise) {
  return knex.schema.table('todos', function (table){
    table.integer('usersId')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('todos', function(table){
    table.dropColumn('usersId')
      })
};
