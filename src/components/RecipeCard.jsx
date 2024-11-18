import "./RecipeCard.css"
import { Link } from "react-router-dom";

function RecipeCard(props) {
    const {eachRecipe: {id,title,imageUrl,servings,ingredients,cookingInstructions,done} } = props;
    return (
        <li className="recipe-card">
            <p>{id}</p>
            <p>{title}</p>
            <p>{imageUrl}</p>
            <p>{servings}</p>
            <p>{ingredients}</p>
            <p>{cookingInstructions}</p>
            <p>{done ? "✅" : "❌ "}</p>
            <Link to={`/recipes/${id}`}>Details</Link>
            <button>delete</button>
        </li>
    )
}
export default RecipeCard

