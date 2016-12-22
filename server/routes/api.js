var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

router.get('/cereals/:name', function(req, res, next) {
    knex('cereals')
    .where('name', req.params.name)
    .join('ratings', 'cereal_id', 'cereals.id')
    .then(function(results) {
        console.log('results are ', results);

        let overallScore = 0
        let flavor = 0
        let texture = 0
        let milkFlavor = 0
        let box = 0
        let cerealObj = {}

        for (var i = 0; i < results.length; i++) {
            overallScore += results[i].overallScore
            flavor += results[i].flavor
            texture += results[i].texture
            milkFlavor += results[i].milkFlavor
            box += results[i].box
        }

        cerealObj.name = results[0].name.toLowerCase()
        cerealObj.cereal_id = results[0].cereal_id
        cerealObj.overallScore = overallScore / results.length
        cerealObj.flavor = flavor / results.length
        cerealObj.texture = texture / results.length
        cerealObj.milkFlavor = milkFlavor / results.length
        cerealObj.box = box / results.length
        console.log('obj', cerealObj);

        res.json(cerealObj);
    })
})

/* GET users listing. */
// router.get('/cereals', function(req, res, next) {
//     knex('cereals')
//     // .where('name',req.params.name)
//     .join('ratings', 'cereal_id', 'cereals.id')
//     .then(function(results) {
//         // console.log('the search req.body ', req.body);
//         console.log('results are ', results);
//         //loop through results and get averages here to send back 1 object
//
//         res.json(results);
//     })
// })

//get one cereal to rate

// post a new rating
router.post('/cereals', function(req, res, next) {
    console.log('req.body', req.body);
    res.json(req.body)
})

module.exports = router;
