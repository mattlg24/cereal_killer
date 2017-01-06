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
                }),
                knex('cereals')
                .insert({
                    name: 'cap\'n crunch',
                }),
                knex('cereals')
                .insert({
                    name: 'raisin bran',
                }),
                knex('cereals')
                .insert({
                    name: 'reese\'s puffs',
                }),
                knex('cereals')
                .insert({
                    name: 'lucky charms',
                }),
                knex('cereals')
                .insert({
                    name: 'cocoa puffs',
                }),
                knex('cereals')
                .insert({
                    name: 'frosted flakes',
                }),
                knex('cereals')
                .insert({
                    name: 'frosted mini wheats',
                }),
                knex('cereals')
                .insert({
                    name: 'corn pops',
                }),
                knex('cereals')
                .insert({
                    name: 'alpha bits',
                }),
            ]);
        });
};
