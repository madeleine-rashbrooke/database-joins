var config = require('./knexfile').development
var knex = require('knex')(config)

knex.from ('todos')
  .innerJoin('users', 'users.id', 'todos.usersId' )
  .then (function (data) {
    console.log("I got the tables to join!", data)
    })
  .catch(logError)
  .finally(closeDB)

  function logError (err) {
    console.log('Bother: ', err)
  }

  function closeDB () {
  knex.destroy()
}
