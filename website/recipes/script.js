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


let prototypeRecipe = "<img src='https://img.taste.com.au/aG7HtK7r/w720-h480-cfill-q80/taste/2016/11/lamingtons-79278-1.jpeg' alt='picture of lamington' width='700px' height='500px'>"+
'<table><tr><td><h5>Ingredients</h5><ul>'+
    '<li>125g butter softened</li>'+
		'<li>1/2 cup caster sugar</li>'+
		'<li>1/2 teaspoon vanilla extract</li> 		'+
		'<li>3 eggs</li>'+
		'<li>1 3/4 cup plain flour</li>'+
		'<li>1 teaspoon baking soda</li>		'+
		'<li>1/2 cup milk</li>'+
		'<li>2 cups desiccated coconut</li>'+
		'<li><h5>Icing</h5></li>'+
		'<li>1/2 cup brown sugar</li>'+
		'<li>1/4 cup cocoa powder</li>'+
		'<li>1 tablespoon butter, softened</li>'+
		'<li>1/2 cup boiling water</li>'+
  '</ul>'+
	'</td>'+
	'<td>'+
  '<h5>Method</h5>'+
  "<ol start='0'>"+
    '<li>Preheat oven to 180°C/160°C fan-forced. Grease a 3cm-deep, 20cm x 30cm (base) lamington pan. '+
		'Line with baking paper, leaving a 2cm overhang on all sides. Using an electric mixer, beat butter, sugar and vanilla until light and fluffy.	Add eggs, 1 at a time, beating well after each addition (mixture may curdle).</li> '+
		'<li>Sift half the flour over butter mixture. Stir to combine. Add half the milk. Stir to combine. Repeat with remaining flour and milk. Spoon into prepared pan. Smooth top. 		Bake for 30 minutes or until a skewer inserted in centre comes out clean. Stand in pan for 10 minutes. Turn out onto a wire rack. Cover with a clean tea towel. Set aside overnight.	</li>'+
		'<li>	Make icing: Sift icing sugar and cocoa into a bowl. Add butter and boiling water. Stir until smooth. </li>'+
		'<li>	Cut cake into 15 pieces. Place coconut in a dish. Using a fork, dip 1 piece of cake in icing. Shake off excess. Toss in coconut. Place on a wire rack over a baking tray. Repeat with remaining cake, icing and coconut. Stand for 2 hours or until set. Serve. </li>'+
  '</ol>	</td></tr></table>'
