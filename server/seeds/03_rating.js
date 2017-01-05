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
                user_id: '1',
                cereal_id: '3',
                overallScore: '26',
                flavor: '8',
                texture: '7',
                milkFlavor: '8',
                box: '3',
                favorite: true
            }),
            knex('ratings')
            .insert({
                user_id: '1',
                cereal_id: '4',
                overallScore: '23',
                flavor: '8',
                texture: '5',
                milkFlavor: '7',
                box: '3',
                favorite: true
            }),
            knex('ratings')
            .insert({
                user_id: '1',
                cereal_id: '5',
                overallScore: '21',
                flavor: '7',
                texture: '7',
                milkFlavor: '6',
                box: '1',
                favorite: true
            }),
            knex('ratings')
            .insert({
                user_id: '1',
                cereal_id: '6',
                overallScore: '31',
                flavor: '10',
                texture: '10',
                milkFlavor: '9',
                box: '2',
                favorite: true
            }),
            knex('ratings')
            .insert({
                user_id: '1',
                cereal_id: '7',
                overallScore: '26',
                flavor: '10',
                texture: '8',
                milkFlavor: '7',
                box: '1',
                favorite: true
            }),
            knex('ratings')
            .insert({
                user_id: '1',
                cereal_id: '8',
                overallScore: '28',
                flavor: '9',
                texture: '8',
                milkFlavor: '10',
                box: '1',
                favorite: true
            }),
            knex('ratings')
            .insert({
                user_id: '1',
                cereal_id: '9',
                overallScore: '24',
                flavor: '8',
                texture: '6',
                milkFlavor: '8',
                box: '2',
                favorite: true
            }),
            knex('ratings')
            .insert({
                user_id: '1',
                cereal_id: '10',
                overallScore: '22',
                flavor: '8',
                texture: '6',
                milkFlavor: '7',
                box: '1',
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
            }),
            knex('ratings')
            .insert({
                user_id: '2',
                cereal_id: '2',
                overallScore: '27',
                flavor: '10',
                texture: '7',
                milkFlavor: '8',
                box: '2',
                favorite: true
            }),
            knex('ratings')
            .insert({
                user_id: '2',
                cereal_id: '3',
                overallScore: '28',
                flavor: '8',
                texture: '7',
                milkFlavor: '10',
                box: '3',
                favorite: true
            }),
            knex('ratings')
            .insert({
                user_id: '2',
                cereal_id: '4',
                overallScore: '26',
                flavor: '8',
                texture: '7',
                milkFlavor: '8',
                box: '3',
                favorite: true
            }),
            knex('ratings')
            .insert({
                user_id: '2',
                cereal_id: '5',
                overallScore: '25',
                flavor: '6',
                texture: '8',
                milkFlavor: '9',
                box: '2',
                favorite: true
            }),
            knex('ratings')
            .insert({
                user_id: '2',
                cereal_id: '6',
                overallScore: '23',
                flavor: '7',
                texture: '8',
                milkFlavor: '5',
                box: '3',
                favorite: true
            }),
            knex('ratings')
            .insert({
                user_id: '2',
                cereal_id: '7',
                overallScore: '22',
                flavor: '8',
                texture: '6',
                milkFlavor: '6',
                box: '2',
                favorite: true
            }),
            knex('ratings')
            .insert({
                user_id: '2',
                cereal_id: '8',
                overallScore: '26',
                flavor: '7',
                texture: '7',
                milkFlavor: '9',
                box: '3',
                favorite: true
            }),
            knex('ratings')
            .insert({
                user_id: '2',
                cereal_id: '9',
                overallScore: '26',
                flavor: '8',
                texture: '7',
                milkFlavor: '9',
                box: '2',
                favorite: true
            }),
            knex('ratings')
            .insert({
                user_id: '2',
                cereal_id: '10',
                overallScore: '26',
                flavor: '7',
                texture: '8',
                milkFlavor: '8',
                box: '3',
                favorite: true
            }),
        ]);
    });
};
