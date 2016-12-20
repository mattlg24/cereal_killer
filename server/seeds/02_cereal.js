'use strict'

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('cereals')
    .del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('cereals')
                .insert({
                    name: 'cheerios',
                }),
                knex('cereals')
                .insert({
                    name: 'trix',
                }),
                knex('cereals')
                .insert({
                    name: 'fruit loops',
                })
            ]);
        });
};
