var config = require('./knexfile').development
var knex = require('knex')(config)

function logError (err) {
  console.log('Bother: ', err)
}

function closeDB () {
knex.destroy()
}

knex.from ('todos')
  .innerJoin('usersTodos', 'usersTodos.task_id', 'todos.id' )
  .innerJoin('users', 'users.id', 'usersTodos.users_id')
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


function addRow (userObject){
  return knex('usersTodos')
  .insert(userObject)
  .catch(logError)
  .finally(closeDB)
}

// addRow({ users_id: '2', task_id: '2' })
// addRow({ users_id: '2', task_id: '1' })
// addRow({ users_id: '5', task_id: '3' })
// addRow({ users_id: '3', task_id: '3' })
// addRow({ users_id: '6', task_id: '3' })
// addRow({ users_id: '11', task_id: '3' })
