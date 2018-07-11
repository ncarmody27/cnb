function editRecipe(id){
	let recipe = document.getElementById(id)
	recipe = recipe.cells
	let ingredients = recipe[3].innerHTML
	ingredients = ingredients.replace(/<\/li>/g, ',')
	ingredients = ingredients.replace(/<li>|<\/ul>|<ul>/g, '')
	ingredients = ingredients.replace(/,$/ , '') 
	let method = recipe[4].innerHTML
	method = method.replace(/<\/li>/g, ',')
	method = method.replace(/<li>|<\/ul>|<ul>|<ol start="0">|<\/ol>/g, '')
	method = method.replace(/,$/ , '') 
	console.log(`ingredients: ${ingredients} method: ${method}`)
	let updateForm =`
<form id='update' method='post' action= ${url}/api/recipe/>
Update:<br>
Title: <input type="text" name="title" value="${recipe[0].innerText}">
Picture Link: <input type="text" name="link" value="${recipe[1].innerText}">
Picture alt: <input type="text" name="alt" value="${recipe[2].innerText}" >
Ingredients: <input type="text" name="ingredients" value="${ingredients}">
Method: <input type="text" name="method"value="${method}">
<input type="text" name="id" style='display:none;'value="${recipe[5].innerText}">
<input type="submit" value="Submit" >
</form>
`
console.log(updateForm)
document.getElementById('updateRecipe').innerHTML = updateForm
	return([ingredients, method])
}



function postRecipe(form){
	let name = form.name.value;
	console.log(name);
	$.ajax({
		type: 'POST',
		url: uri +'?'+ 'name='+name,
		success: function(data){
			console.log(data);
		},
		error: function(jqXHR, textStatus, err){
			console.log(err);
		}
	})
}