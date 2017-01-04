'use strict'

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('ratings')
    .del()
    .then(function() {
        return Promise.all([
            // Inserts seed entries
            knex('ratings')
            .insert({
                user_id: '1',
                cereal_id: '1',
                overallScore: '23',
                flavor: '8',
                texture: '7',
                milkFlavor: '6',
                box: '2',
                favorite: false
            }),
            knex('ratings')
            .insert({
                user_id: '1',
                cereal_id: '2',
                overallScore: '27',
                flavor: '9',
                texture: '7',
                milkFlavor: '8',
                box: '3',
                favorite: true
            }),
            knex('ratings')
            .insert({
                user_id: '2',
                cereal_id: '1',
                overallScore: '26',
                flavor: '9',
                texture: '8',
                milkFlavor: '8',
                box: '1',
                favorite: true
            })
        ]);
    });
};
