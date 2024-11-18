import RecipeList from "../components/recipeList"

function DashboardPage (props) {
    return (
        <>
           <RecipeList recipes={props.recipes}/> 
        </>
    )
}

export default DashboardPage