
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({name: 'Dylan', email: 'dylan@hotmail.com'}),
        knex('users').insert({name: 'Maddy', email: 'maddy@xtra.co.nz'}),
        knex('users').insert({name: 'Groucho', email: 'groucho@marx.com'})
      ]);
    });
};
