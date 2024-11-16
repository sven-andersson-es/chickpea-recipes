import "./Navbar.css"
import logo from "../assets/chickpea.png"
import { Link } from "react-router-dom"

function Navbar () {
    return (
        <header>
            <Link to="/"><img className="logo" src={logo} alt="Chickpea Recipes Logo" /></Link>
            <div className="title">Chickpea Recipes</div>
        </header>
    )
}

export default Navbar