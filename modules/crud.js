'use strict'

const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'bear',
  host: 'postgreszero.clxub80upoqw.us-east-2.rds.amazonaws.com',
  database: 'mydb',
  password: 'Password-1',
  port: 5432,
})

module.exports = class CRUD{

static query(query, res){
	pool.query(query, (err, result) => {
		if (err){console.log(err)}
		//console.log(result.rows[0])
		res.json(result.rows[0])
  })
}

static createRecipe(req, res){
	let queryStatement = `insert into recipes(title, link, alt, ingredients, method)` 
	let queryValues = ` values('${req.body.title}','${req.body.link}','${req.body.alt}',`
	let queryValues1 =`'{${req.body.ingredients}}','{${req.body.method}}')`
	let query = queryStatement + queryValues + queryValues1
	//console.log(query)
	pool.connect((err, client, done) => {
		if (err) throw err
		client.query(query, (err, result) => {
		done ()
		if (err){console.log(err)}
		else {
			//console.log(result.rows[0])
			}    
		//console.log(result.rows[0])
		
		})
	})

}

static getAllRecipes(res){
	let query = `select * from recipes`
		pool.connect((err, client, done) => {
			if (err) throw err
			client.query(query, (err, result) => {
			done ()
			if (err){console.log(err)}
			else {res.json(result.rows)}    
		})
	})
	/*pool.query(query, (err, result) => {
		if (err){console.log(err)}
		//console.log(result.rows[0])
		res.json(result.rows)
  })*/
}

static getRecipe(req, res){
	let query = ''
	if (req.params.id){
		query = `select * from recipes where index = ${req.params.id}`
		console.log(`ID QUERY: ${query}`)
	}
	if(req.params.title){
		query = `select * from recipes where title = '${req.params.title}'`
		console.log(`TITLE QUERY: ${query}`)
	}
	pool.query(query, (err, result) => {
		if (err){console.log(err)}
		//console.log(result.rows[0])
		res.json(result.rows)
  })
}

static updateRecipe(req, res){
	let queryStatement = `update recipes set(title, link, alt, ingredients, method) =` 
	let queryValues = ` ('${req.body.title}','${req.body.link}','${req.body.alt}',`
	let queryValues1 =`'{${req.body.ingredients}}','{${req.body.method}}')`
	let queryValues2 =`where title = '${req.body.title}'`
	let query = queryStatement + queryValues + queryValues1 + queryValues2
	//console.log(query)
	pool.query(query, (err, result) => {
		if (err){console.log(err)}
		//console.log(result.rows[0])
		//res.render('recipeCRUD.html', {current: current})
  })
}

static deleteRecipe(req, res){
	let queryStatement = `delete from recipes ` 
	let queryValues = `where index = ${req.body.id}`
	let query = queryStatement + queryValues
	console.log(query)
	pool.query(query, (err, result) => {
		if (err){console.log(err)}
		//console.log(result.rows[0])
		//res.render('recipeCRUD.html', {url: current})
  })
}
static test(){
	
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
})

const client = new Client({
  user: 'client',
  host: 'postgreszero.clxub80upoqw.us-east-2.rds.amazonaws.com',
  database: 'mydb',
	password: 'Password-1',
  port: 5432,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})

}

}