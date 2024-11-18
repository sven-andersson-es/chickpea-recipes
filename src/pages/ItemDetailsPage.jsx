import { useParams } from "react-router-dom";

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
			<p>{recipeToDisplay.id}</p>
			<p>{recipeToDisplay.title}</p>
			<p>{recipeToDisplay.imageUrl}</p>
			<p>{recipeToDisplay.servings}</p>
			<p>{recipeToDisplay.ingredients}</p>
			<p>{recipeToDisplay.cookingInstructions}</p>
			<p>{recipeToDisplay.done ? "✅" : "❌ "}</p>
			<button>delete</button>
		</div>
	);
}

export default ItemsDetailsPage;
