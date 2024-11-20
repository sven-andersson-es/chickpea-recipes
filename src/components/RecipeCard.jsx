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
	} = props;
	return (
		<li className="recipe-card">
			<div className="top">
				<h3>{title}</h3>
				<div className="image">
					<img src={imageUrl} alt="" />
				</div>
				<p>Serves: {servings} people</p>
				
				<p>Cooked: {done ? "✅" : "❌ "}</p>
			</div>
			<div className="bottom">
				<a href="">Delete</a>
				<Link to={`/recipes/${id}`}>Details</Link>
			</div>
		</li>
	);
}
export default RecipeCard;
