
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
     tbl.increments('id')
     tbl.string('make', 128).notNullable()
     tbl.string('model', 128).notNullable()
     tbl.integer('VIN').notNullable()
     tbl.integer('mileage').notNullable()
  })
};
// creates a table with necessary columns

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
