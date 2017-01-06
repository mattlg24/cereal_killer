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

// post a new rating
router.post('/cereals', function(req, res, next) {
    console.log('req.body', req.body);
    let overAllScore = req.body.flavor + req.body.texture + req.body.milkFlavor
    // + req.body.box
    knex('cereals')
    .where('name', req.body.name.toLowerCase())
    .then(function(cerealResults) {
        if (cerealResults.length >= 1) {
            console.log('this cereal already exists in the database');

            return knex('cereals')
            .where('name', req.body.name.toLowerCase())
            .then(function(cerealId) {
              console.log('cereal Id', cerealId[0]);
              let cId = cerealId[0].id
              return cId
            })
        } else {
            return knex('cereals')
            .insert({
                name: req.body.name.toLowerCase()
            }, 'id')
            .then(function(postResults) {
                console.log('added cereal is', postResults[0]);
                return postResults[0]
            })
        }
    })
    .then(function(id) {
    console.log('postResults', id);
    knex('ratings')
    .insert({
        cereal_id: id,
        flavor: req.body.flavor,
        texture: req.body.texture,
        milkFlavor: req.body.milkFlavor,
        box: req.body.box,
        favorite: req.body.favorite,
        overallScore: parseInt(req.body.flavor) + parseInt(req.body.texture) + parseInt(req.body.milkFlavor)
        // + parseInt(req.body.box),
    }, '*')
    .then(function(results) {
        console.log('req.body results', results);
        res.json(results)
    })
  })
})

// signup
router.post('/signup', function(req, res, next) {
    // console.log('api.js signup')
    // console.log('req.body', req.body);
    knex('users')
    .where('user_name', req.body.user_name)
    .then(function(user_nameResults) {
        if (user_nameResults.length >= 1) {
            console.log('that username is already taken') //make this visible to user
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
                delete theUser.hashed_pw
                res.json(theUser)
            })
        }
    })
})

//login
router.post('/login', function(req, res, next) {
    // console.log('api.js');
    // console.log('req.body', req.body);
    knex('users').where('user_name', req.body.user_name).first().then((user) => {
        let passwordMatch = bcrypt.compareSync(req.body.password, user.hashed_pw)
        if (passwordMatch == false) {
            console.log('Bad username or password'); //make this visible to user
        } else {
            //set cookies
            // req.session.userInfo = user
            delete user.hashed_pw
            console.log('hell o there user', user);
            res.json(user)
        }
    })
})

router.get('/top10', function(req, res, next) {
    console.log('i got to top 10 api.js');
    knex('cereals').join('ratings', 'cereal_id', 'cereals.id').then(function(results) {
        console.log('top cereal results are', results);

        //return the top cereals with the highest avg overall score
        let allCerealsArr = []

        if (!allCerealsArr.length) {
            allCerealsArr.push(results[0])
            allCerealsArr[0].allOverallScores = []
            allCerealsArr[0].allFlavorScores = []
            allCerealsArr[0].allTextureScores = []
            allCerealsArr[0].allMilkFlavorScores = []
            allCerealsArr[0].allBoxScores = []
        }

        let exists = false

        for (var i = 0; i < results.length; i++) {
            let cerealName = results[i].name
            console.log('name', cerealName);
            for (var j = 0; j < allCerealsArr.length; j++) {
                if (allCerealsArr[j].name === results[i].name) {
                    exists = true
                    // push scores into new array propertires
                    allCerealsArr[j].allOverallScores.push(results[i].overallScore)
                    allCerealsArr[j].allFlavorScores.push(results[i].overallScore)
                    allCerealsArr[j].allTextureScores.push(results[i].overallScore)
                    allCerealsArr[j].allMilkFlavorScores.push(results[i].overallScore)
                    allCerealsArr[j].allBoxScores.push(results[i].overallScore)

                }
            }
            if (!exists) {
                allCerealsArr.push(results[i])
                allCerealsArr[allCerealsArr.length - 1].allOverallScores = [results[i].overallScore]
                allCerealsArr[allCerealsArr.length - 1].allFlavorScores = [results[i].flavor]
                allCerealsArr[allCerealsArr.length - 1].allTextureScores = [results[i].flavor]
                allCerealsArr[allCerealsArr.length - 1].allMilkFlavorScores = [results[i].flavor]
                allCerealsArr[allCerealsArr.length - 1].allBoxScores = [results[i].flavor]
            }
            exists = false
        }
        //avg array scores here using loop? write new function and call it here
        console.log('all cereals arr is', allCerealsArr);

        //work on logic to sort top cereals into array

        console.log('some results are', results);
        res.json(results)
    })
})

module.exports = router;

// .join('ratings', 'cereal_id', 'cereals.id')
