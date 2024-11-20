import { useParams } from "react-router-dom";
import "./ItemDetailsPage.css";

function ItemsDetailsPage(props) {
	// const {eachRecipe: {id,title,imageUrl,servings,ingredients,cookingInstructions,done} } = props;
	const allRecipes = props.recipes;
	console.log("allRecipes", allRecipes);

	const params = useParams();
	console.log("params.recipeId", params.recipeId);

	//Important, in our json we have the id as typeof number, which created problems - Ask Marcel!
	const recipeToDisplay = allRecipes.find(
		(recipe) => recipe.id.toString() === params.recipeId
	);

	console.log(recipeToDisplay);

	return (
		<div className="details-page-card">
			<h1>{recipeToDisplay.title}</h1>
			<div className="image">
				<img src={recipeToDisplay.imageUrl} alt="" />
			</div>
			<p>Serves {recipeToDisplay.servings} people</p>
			<h3>Ingredients</h3>
			<ul>{
				recipeToDisplay.ingredients.map((ingredient,index) => {
					return <li key={index}>{ingredient	}</li>
				})
			
			}
			</ul>
			<h3>Cooking instructions</h3>
			<p>{recipeToDisplay.cookingInstructions}</p>
			<p>Cooked: {recipeToDisplay.done ? "✅" : "❌ "}</p>
			<button>delete</button>
		</div>
	);
}

export default ItemsDetailsPage;
