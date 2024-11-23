import RecipeList from "../components/recipeList"

function DashboardPage ({recipes,setRecipes,deleteRecipe}) {
    return (
        <>
           <RecipeList  recipes={recipes} setRecipes={setRecipes} deleteRecipe={deleteRecipe}/> 
        </>
    )
}

export default DashboardPage