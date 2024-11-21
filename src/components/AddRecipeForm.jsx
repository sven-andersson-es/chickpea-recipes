import "./AddRecipeForm.css";

function AddRecipeForm(props) {
	return (
		<div className="recipe-form">
			<form>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input type="text" name="title" id="title" />
				</div>
				<div className="form-group">
					<label htmlFor="imageUrl">Image URL</label>
					<input type="url" name="imageUrl" id="imageUrl" placeholder="https://..." />
				</div>
				<div className="form-group">
					<label htmlFor="servings">Servings</label>
					<input type="number" name="servings" id="servings" />
				</div>
				<div className="form-group">
					<label htmlFor="ingredients">Ingredients</label>
					<input type="text" name="ingredients" id="ingredients" />
				</div>
				<div className="form-group">
					<label htmlFor="cookingInstructions">Cooking Instructions</label>
					<input
						type="text"
						name="cookingInstructions"
						id="cookingInstructions"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="done">Did you cook it?</label>
					<input type="checkbox" name="done" id="done" />
				</div>
				<div className="form-group">
					<button type="submit">Save recipe</button>
				</div>
			</form>
		</div>
	);
}

export default AddRecipeForm;
