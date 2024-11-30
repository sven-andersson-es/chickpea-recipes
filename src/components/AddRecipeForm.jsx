import { useState } from "react";
import "./AddRecipeForm.css";
import IngredientsInput from "./IngredientsInput";


function AddRecipeForm({ setRecipes, recipes }) {
	//console.log(setRecipes);
	
	const [saved, setSaved] = useState(false);

	const [title, setTitle] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [servings, setServings] = useState(0);
	const [ingredients, setIngredients] = useState([]);
	const [cookingInstructions, setCookingInstructions] = useState("");
	const [done, setDone] = useState(false);

	const handleTitle = (e) => setTitle(e.target.value);
	const handleImageUrl = (e) => setImageUrl(e.target.value);
	const handleServings = (e) => setServings(e.target.value);
	const handleCookingInstructions = (e) =>
		setCookingInstructions(e.target.value);
	const handleDone = (e) => setDone(e.target.checked);

	const addRecipes = (newRecipe) => {
		const updateRecipes = [...recipes, newRecipe];
		setRecipes(updateRecipes);
		setSaved(true);
		setTimeout(() => {
			setSaved(false)
		}, 4000)
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const id = Math.floor(Math.random() * 9999);
		const newRecipe = {
			id,
			title,
			imageUrl,
			servings,
			ingredients,
			cookingInstructions,
			done,
		};
		//console.log(newRecipe);

		addRecipes(newRecipe);

		//Clear the form
		setTitle("");
		setImageUrl("");
		setServings(4);
		setIngredients([]);
		setCookingInstructions("");
		setDone(false);
	};
	//console.log(recipes);

	return (
		<div className="recipe-form">
		{saved && (
          <div className="saved">
		  <div className="saved-message">
            <h3>Recipe Saved</h3>
            <div>
			  <button className="btn" onClick={() => setSaved(false)}>Close</button>
            </div>
          </div>
		  </div>
        )}
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						name="title"
						id="title"
						value={title}
						onChange={handleTitle}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="imageUrl">Image URL</label>
					<input
						type="url"
						name="imageUrl"
						id="imageUrl"
						placeholder="https://..."
						value={imageUrl}
						onChange={handleImageUrl}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="servings">Servings</label>
					<input
						type="number"
						name="servings"
						id="servings"
						value={servings}
						onChange={handleServings}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="ingredients">Ingredients</label>
					<IngredientsInput
						ingredients={ingredients}
						setIngredients={setIngredients}
					/>
					{/* <input type="text" name="ingredients" id="ingredients" value={ingredients} onChange={handleIngredients} /> */}
				</div>
				<div className="form-group">
					<label htmlFor="cookingInstructions">Cooking Instructions</label>
					<input
						type="text"
						name="cookingInstructions"
						id="cookingInstructions"
						value={cookingInstructions}
						onChange={handleCookingInstructions}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="done">Did you cook it?</label>
					<input
						type="checkbox"
						name="done"
						id="done"
						checked={done}
						onChange={handleDone}
					/>
				</div>
				<div className="form-group">
					<button type="submit">Save recipe</button>
				</div>
			</form>
		</div>
	);
}

export default AddRecipeForm;
