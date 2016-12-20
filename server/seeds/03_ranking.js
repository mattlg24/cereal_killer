'use strict'

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('rankings')
    .del()
    .then(function() {
        return Promise.all([
            // Inserts seed entries
            knex('rankings')
            .insert({
                user_id: '1',
                cereal_id: '1',
                overallScore: '40',
                flavor: '8',
                texture: '7',
                box: '5',
                favorite: false
            }),
            knex('rankings')
            .insert({
                user_id: '1',
                cereal_id: '2',
                overallScore: '33',
                flavor: '9',
                texture: '7',
                box: '6',
                favorite: true
            }),
            knex('rankings')
            .insert({
                user_id: '2',
                cereal_id: '1',
                overallScore: '40',
                flavor: '9',
                texture: '8',
                box: '1',
                favorite: true
            })
        ]);
    });
};
