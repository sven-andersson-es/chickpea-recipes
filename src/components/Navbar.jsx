import "./Navbar.css"
import logo from "../assets/chickpea.png"

function Navbar () {
    return (
        <header>
            <a href=""><img className="logo" src={logo} alt="Chickpea Recipes Logo" /></a>
            <div className="title">Chickpea Recipes</div>
        </header>
    )
}

export default Navbar