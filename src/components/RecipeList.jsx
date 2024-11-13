import recipeArray from "../assets/data/recipes.json"
import RecipeCard from "./RecipeCard"

function RecipeList() {
    
    return (
        <ul className="recipe-list">
            {
                recipeArray.map((recipe, index) => {
                    return <RecipeCard key={index} eachRecipe={recipe}/>
                })
            }
        </ul>
    )
}
export default RecipeList