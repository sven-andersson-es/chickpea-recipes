import "./Navbar.css"
import logo from "../assets/chickpea.png"

function Navbar () {
    return (
        <nav>
            <a href=""><img className="logo" src={logo} alt="Chickpea Recipes Logo" /></a>
            <div className="title">Chickpea Recipes</div>
        </nav>
    )
}

export default Navbar