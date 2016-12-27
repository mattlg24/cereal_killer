let express = require('express');
let router = express.Router();
let knex = require('../db/knex')
let bcrypt = require('bcrypt')

/* GET users listing. */
router.get('/cereals/:name', function(req, res, next) {
    knex('cereals')
    .where('name', req.params.name)
    .join('ratings', 'cereal_id', 'cereals.id')
    .then(function(results) {
        console.log('results are ', results);
        if (!results.length) {
            res.send('no cereal')
        }

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

//get one cereal to rate

// post a new rating
router.post('/cereals', function(req, res, next) {
    console.log('req.body', req.body);
    knex('ratings')
    .insert({
        flavor: req.body.flavor,
        texture: req.body.texture,
        milkFlavor: req.body.milkFlavor,
        box: req.body.box
    }, '*')
    .then(function(results) {
        console.log('req.body results', results);
    })
    res.json(results)
})

// signup
router.post('/signup', function(req, res, next) {
    console.log('api.js signup')
    console.log('req.body', req.body);
    //check if username/email already taken
    knex('users')
    .where('user_name', req.body.user_name)
    .then(function(user_nameResults) {
        if (user_nameResults.length >= 1) {
            console.log('that username is already taken');
        } else {
            let hash = bcrypt.hashSync(req.body.password, 12)
            knex('users')
            .insert({
                name: req.body.name,
                user_name: req.body.user_name,
                email: req.body.email,
                hashed_pw: hash
            }, '*')
            .then(function(results) {
// need to set cookies
                let theUser = results[0]
                console.log('theUser', theUser);
                // console.log('signup results are', results);
                res.json(results)
            })
        }
    })
})

module.exports = router;
