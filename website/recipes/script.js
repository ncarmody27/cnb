function viewRecipe(recipe, divId){
  //takes a recipe(html to be inserted) and the name of the div and inserts it into the DOM
	const header = document.getElementById(divId).innerHTML
	recipe =header+prototypeRecipe	//will be given recipe from DB/server
	console.log(recipe)
	document.getElementById(divId).innerHTML=recipe
	//return recipe
	}

//use toggle onclick to toggle view of recipe
function closeRecipe(divId){
  let element = document.getElementById(divId).innerHTML
  //regex to remove all past the closing </a> tag
  //return original state
  document.getElementById(divId).innerHTML=element;

}

let prototypeRecipe = '<p>test</p>'
