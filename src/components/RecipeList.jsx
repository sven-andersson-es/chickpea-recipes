import { useState } from "react";
import RecipeCard from "./RecipeCard";
import "./RecipeList.css";
import AddRecipeForm from "./AddRecipeForm";

function RecipeList({recipes,setRecipes,deleteRecipe}) {
	

	return (
		<>
			<AddRecipeForm setRecipes={setRecipes} recipes={recipes}/>
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
