
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('todos').insert({description: 'buy milk'}, {done: 'true'}),
        knex('todos').insert({description: 'buy eggs'}, {done: 'false'}),
        knex('todos').insert({description: 'stage night at opera house'}, {done: true})
      ]);
    });
};
