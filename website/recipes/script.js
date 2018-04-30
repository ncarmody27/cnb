function viewRecipe(recipe, divId){
  //takes a recipe(html to be inserted) and the name of the div and inserts it into the DOM
	const element = document.getElementById(divId+'Recipe')
	if (element.style.display === 'none'){
		element.style.display = 'block'
		return
	}
	if (element.style.display === 'block'){
		element.style.display = 'none'
		return
	} else{
		recipe = prototypeRecipe	//will be given recipe from DB/server
		console.log(recipe)
		element.innerHTML=recipe
		element.style.display = 'block'
	}
	
}


let prototypeRecipe = '<p>test</p>'
