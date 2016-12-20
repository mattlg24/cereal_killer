'use strict'

exports.up = function(knex) {
    return knex.schema.createTable('rankings', (table) => {
        table.increments();
        table.integer('user_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        table.integer('cereal_id')
        .references('id')
        .inTable('cereals')
        .onDelete('CASCADE')
        table.integer('overallScore')
        table.integer('flavor')
        table.integer('texture')
        table.integer('box')
        table.boolean('favorite')
        table.timestamps(true, true);
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('rankings')
}
