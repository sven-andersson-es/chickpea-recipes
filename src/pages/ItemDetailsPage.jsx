import { useParams } from "react-router-dom";
import "./ItemDetailsPage.css";
import { Link } from "react-router-dom";

function ItemsDetailsPage(props) {
  // const {eachRecipe: {id,title,imageUrl,servings,ingredients,cookingInstructions,done} } = props;
  const allRecipes = props.recipes;
  //console.log("allRecipes", allRecipes);

  const params = useParams();
  //console.log("params.recipeId", params.recipeId);

  //Important, in our json we have the id as typeof number, which created problems - Ask Marcel!
  const recipeToDisplay = allRecipes.find(
    (recipe) => recipe.id.toString() === params.recipeId
  );

  //console.log(recipeToDisplay);

  return (
    <div className="details-page-card">
      <h1>{recipeToDisplay.title}</h1>
      <div className="image">
        <img
          src={recipeToDisplay.imageUrl}
          onError={({ currentTarget }) => {
            currentTarget.src =
              "https://archive.org/download/placeholder-image/placeholder-image.jpg";
          }}
          alt=""
        />
      </div>
      <p className="mb-2">Serves {recipeToDisplay.servings} people</p>
      <h3>Ingredients</h3>
      <ul className="mb-2">
        {recipeToDisplay.ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </ul>
      <h3>Cooking instructions</h3>
      <p className="mb-1">{recipeToDisplay.cookingInstructions}</p>
      <p>Cooked: {recipeToDisplay.done ? "✅" : "❌ "}</p>
      <Link to={`/recipes/edit/${recipeToDisplay.id}`} className="btn">
        Edit
      </Link>
    </div>
  );
}

export default ItemsDetailsPage;
