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
	pool.query(query, (err, result) => {
		if (err){console.log(err)}
		//console.log(result.rows[0])
		res.json(result)
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