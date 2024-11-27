import "./RecipeCard.css";
import { Link } from "react-router-dom";

function RecipeCard(props) {
  const {
    eachRecipe: {
      id,
      title,
      imageUrl,
      servings,
      ingredients,
      cookingInstructions,
      done,
    },
    deleteRecipe,
  } = props;
  return (
    <li className="recipe-card">
      <div className="top">
        <h3>{title}</h3>
        <Link to={`/recipes/${id}`} className="image mb">
          <img
            src={imageUrl}
            onError={({ currentTarget }) => {
              currentTarget.src =
                "https://archive.org/download/placeholder-image/placeholder-image.jpg";
            }}
            alt=""
          />
        </Link>
        <p className="mb">Serves: {servings} people</p>

        <p>Cooked: {done ? "✅" : "❌ "}</p>
      </div>
      <div className="bottom">
        <button
          onClick={() => {
            deleteRecipe(id);
          }}
          className="delete"
        >
          Delete
        </button>
        <Link to={`/recipes/${id}`} className="btn">
          Details
        </Link>
      </div>
    </li>
  );
}
export default RecipeCard;
