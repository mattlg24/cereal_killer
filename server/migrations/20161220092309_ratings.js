'use strict'

exports.up = function(knex) {
    return knex.schema.createTable('ratings', (table) => {
        table.increments();
        table.integer('user_id')
        .unsigned()
        // .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        table.integer('cereal_id')
        .unsigned()
        // .notNullable()
        .references('id')
        .inTable('cereals')
        .onDelete('CASCADE')
        table.integer('overallScore')
        table.integer('flavor')
        table.integer('texture')
        table.integer('milkFlavor')
        table.integer('box')
        table.boolean('favorite')
        table.timestamps(true, true);
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('ratings')
}
