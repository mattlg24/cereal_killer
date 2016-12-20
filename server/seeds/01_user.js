'use strict'

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('users')
                .insert({
                    name: 'Matt',
                    user_name: 'mattlg',
                    email: 'm@g.com',
                    hashed_pw: 'test',
                }),
                knex('users')
                .insert({
                    name: 'Oli',
                    user_name: 'big O',
                    email: 'o@g.com',
                    hashed_pw: 'test',
                }),
                knex('users')
                .insert({
                    name: 'Yoema',
                    user_name: 'dirty jo',
                    email: 'y@g.com',
                    hashed_pw: 'test',
                })
            ]);
        });
};
