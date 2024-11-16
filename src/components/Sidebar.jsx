import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
	return (
		<nav>
			<ul className="sidebar-nav">
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
			</ul>
		</nav>
	);
}

export default Sidebar;
