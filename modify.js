var config = require('./knexfile').development
var knex = require('knex')(config)

function logError (err) {
  console.log('Bother: ', err)
}

function closeDB () {
knex.destroy()
}

function getUsers () {
  return knex('users').select()
}

function addUser (userObject){
  return knex('users')
  .insert(userObject)
  .catch(logError)
  .finally(closeDB)
}

function printTable () {
return knex('users')
  .select()
  .then( function (data) {
    console.log("the table: ", data)
    })
  .catch(logError)
  .finally(closeDB)
}

function alterRow(idNum, newName, newEmail){
  return knex('users')
  .where('id', '=', idNum)
  .update({
    name: newName,
    email: newEmail
  })
  .catch(logError)
  .finally(closeDB)
}

function deleteRow(idNum){
  return knex('users')
  .where('id', '=', idNum)
  .del()
  .catch(logError)
  .finally(closeDB)
}

addUser({name: 'foobar', email: 'zeppo@gmail.com'});
// addUser({name: 'harpo', email: 'harpo@gmail.com'});

//alterRow('10', 'James', 'james@gmail.com')
//deleteRow(13);
printTable();
