'use strict'

exports.up = function(knex) {
    return knex.schema.createTable('cereals', (table) => {
        table.increments();
        table.string('name')
        table.timestamps(true, true);
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('cereals')
}
