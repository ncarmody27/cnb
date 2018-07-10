// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express')       // call express
var app        = express()                // define our app using express
var bodyParser = require('body-parser')
var CRUD = require('./modules/crud.js');
const request = require('request');
var nunjucks = require('nunjucks');
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('static'))

var port = process.env.PORT || 3000        // set our port
var prod = 'http://cnb.technology'
var test = 'http://localhost:3000'
var current = prod
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
/*router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});*/

router.get('/', function(req, res) {
	res.render('api.html',{message: 'to our API!'}); 
});
router.get('/query/:query', function(req, res){
	console.log(req.params.query)
  CRUD.query(req.params.query, res)
})

//CREATE
router.post('/recipe/create', function(req, res){
	console.log(req.body)
	CRUD.createRecipe(req, res)
	res.redirect('/recipes/edit')
})

//READ
router.get('/recipes', function(req, res){
  CRUD.getAllRecipes(res)
})

router.get('/recipe/id/:id', function(req, res){
  CRUD.getRecipe(req, res)
})

router.get('/recipe/title/:title', function(req, res){
  CRUD.getRecipe(req, res)
})
//UPDATE
router.post('/recipe', function(req, res){
	console.log(req.body)
	CRUD.updateRecipe(req, res)
	res.redirect('/recipes/edit')
})

//DELETE
router.post('/recipe/delete',function(req, res) {
	CRUD.deleteRecipe(req,res);
	res.redirect('/recipes/edit')
});
//Test
router.get('/test', function(req, res) {
	CRUD.test()
	res.redirect('/recipes')
})

var website = express.Router();


//let recipes =[{title: 'Test', picture: {link:'https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_960_720.png', alt:'test'},ingredients: ['ing1','ing2'], method: ['step','step'], index: '0'}]
website.get('/recipes', function (req, res){
	request('http://localhost:3000/api/recipes', { json: true }, (err, resp, body) => {
		if (err) { return console.log(err); }
		let recipes = (body);
		res.render('recipes.html', {recipes})
	})
})


website.get('/recipes/edit', function (req, res){
	request('http://localhost:3000/api/recipes', { json: true }, (err, resp, body) => {
		if (err) { return console.log(err); }
		let recipes = (body);
		res.render('recipeCRUD.html', {url: current, recipes})
	})
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
app.use('', website)

// START THE SERVER
// =============================================================================
app.listen(port)
console.log('Listening on port ' + port)
