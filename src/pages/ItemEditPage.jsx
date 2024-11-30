import { useState } from "react";
import { Link, useParams } from "react-router-dom";
// import "./AddRecipeForm.css";
import IngredientsInput from "../components/IngredientsInput";
import { useNavigate } from "react-router-dom";


function ItemEditPage({ setRecipes, recipes }) {
  // const {eachRecipe: {id,title,imageUrl,servings,ingredients,cookingInstructions,done} } = props;
  const allRecipes = recipes;
  //console.log("allRecipes", allRecipes);

  const params = useParams();
  //console.log("params.recipeId", params.recipeId);

  //Important, in our json we have the id as typeof number, which created problems - Ask Marcel!
  const recipeToDisplay = allRecipes.find(
    (recipe) => recipe.id.toString() === params.recipeId
  );

  const navigate = useNavigate()

  const [saved, setSaved] = useState(false);

  const [title, setTitle] = useState(recipeToDisplay.title);
  const [imageUrl, setImageUrl] = useState(recipeToDisplay.imageUrl);
  const [servings, setServings] = useState(recipeToDisplay.servings);
  const [ingredients, setIngredients] = useState(recipeToDisplay.ingredients);
  const [cookingInstructions, setCookingInstructions] = useState(
    recipeToDisplay.cookingInstructions
  );
  const [done, setDone] = useState(recipeToDisplay.done);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleImageUrl = (e) => setImageUrl(e.target.value);
  const handleServings = (e) => setServings(e.target.value);
  const handleCookingInstructions = (e) =>
    setCookingInstructions(e.target.value);
  const handleDone = (e) => setDone(e.target.checked);

  const updateRecipes = () => {
    const editedRecipes = [...recipes];
    setRecipes(editedRecipes);
    setSaved(true);
    /* setTimeout(() => {
			setSaved(false);
		}, 2000); */
    //console.log(editedRecipes);
    setTimeout(() => {
      navigate(`/`)
    }, 6000)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    recipeToDisplay.title = title;
    recipeToDisplay.imageUrl = imageUrl;
    recipeToDisplay.servings = servings;
    recipeToDisplay.ingredients = ingredients;
    recipeToDisplay.cookingInstructions = cookingInstructions;
    recipeToDisplay.done = done;

    /* const editedRecipe = {
			id,
			title,
			imageUrl,
			servings,
			ingredients,
			cookingInstructions,
			done,
		}; */
    //console.log(editedRecipe);

    //console.log(recipeToDisplay);

    updateRecipes();

    //Clear the form
    /* setTitle("");
		setImageUrl("");
		setServings(4);
		setIngredients([]);
		setCookingInstructions("");
		setDone(false); */
  };
  //console.log(recipes);

  return (
    <>
      <Link to={`/recipes/${recipeToDisplay.id}`} className="back-link">
        Go back
      </Link>
      <div className="recipe-form">
        {saved && (
          <div className="saved">
		  <div className="saved-message">
            <h3>Recipe Saved</h3>
            <div>
              <Link to={`/recipes/${recipeToDisplay.id}`} className="btn">
                Go back
              </Link>
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
    </>
  );
}

export default ItemEditPage;
