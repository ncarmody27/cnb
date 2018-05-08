// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express')       // call express
var app        = express()                // define our app using express
var bodyParser = require('body-parser')
var CRUD = require('./modules/crud.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('website'))

var port = process.env.PORT || 3000        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('API in use');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/query/:query', function(req, res){
	console.log(req.params.query)
	CRUD.query(req.params.query)
})

/*
// ----------------------------------------------------
// create a bear (accessed at POST http://localhost:8080/api/bears)
router.post('/bears', function (req, res) {
	CRUD.create('bears',req,res);
});

// get all the bears (accessed at GET http://localhost:8080/api/bears)
router.get('/bears',function(req, res) {
	CRUD.readAll('bears',req,res);	
});

//get bear by object id(defined by MongoDB) (accessed at GET http://localhost:8080/api/bears/id)
router.get('/bears/:_id',function(req, res){
	CRUD.readId('bears',req, res);	
});

//update bear will grab a bear, and update all that is new (accessed at POST http://localhost:8080/api/bears/id)
router.post('/bears/:_id',function(req, res) {
	CRUD.update('bears',req,res);
});

//delete bear
router.delete('/bears/:_id',function(req, res) {
	CRUD.del('bears',req,res);
});
*/

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router)

// START THE SERVER
// =============================================================================
app.listen(port)
console.log('Listening on port ' + port)
