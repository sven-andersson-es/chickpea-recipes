import "./IngredientsInput.css";

function IngredientsInput({ ingredients, setIngredients }) {
	//console.log(ingredients);

	// Ingredients Array
	function handleKeyDown(e) {
		// If user did not press enter key, return
		if (e.key !== "Enter") return;
		// Get the value of the input
		const value = e.target.value;
		// If the value is empty, return
		if (!value.trim()) return;
		// preventDefault for the mother form and add the value to the tags array
		e.preventDefault();
		setIngredients([...ingredients, value]);
		// Clear the input
		e.target.value = "";
	}

	function deleteIngredient(index) {
		setIngredients(ingredients.filter((_, i) => i !== index));
	}

	return (
		<>
			<div className="ingredients-input-container">
				{ingredients.map((ingredient, index) => {
					return (
						<div key={index} className="ingredient-item">
							<span className="text">{ingredient}</span>
							<span
								onClick={() => {
									deleteIngredient(index);
								}}
								className="delete"
							>
								&times;
							</span>
						</div>
					);
				})}

				<input
					onKeyDown={handleKeyDown}
					type="text"
					className="ingredient-input"
					placeholder="Add new ingredients...↵"
				/>
			</div>
		</>
	);
}

export default IngredientsInput;
