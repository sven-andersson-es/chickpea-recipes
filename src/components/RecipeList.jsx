import { useState } from "react";
import recipeArray from "../assets/data/recipes.json";
import RecipeCard from "./RecipeCard";
import "./RecipeList.css";
import AddRecipeForm from "./AddRecipeForm";

function RecipeList() {
	const [recipes, setRecipes] = useState(recipeArray);

	const deleteRecipe = (id) => {
		const updatedArray = [...recipes];
		setRecipes(updatedArray.filter((recipe) => recipe.id !== id));
	};

	return (
		<>
			<AddRecipeForm />
			<ul className="recipe-list">
				{recipes.map((recipe, index) => {
					return (
						<RecipeCard
							key={index}
							eachRecipe={recipe}
							deleteRecipe={deleteRecipe}
						/>
					);
				})}
			</ul>
		</>
	);
}
export default RecipeList;
