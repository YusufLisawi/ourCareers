import React from "react";
import { Link } from "react-router-dom";
import "./Navs.css";

export default function Navs() {
	return (
		<>
			<ul className="navs">
				<li>
					<Link to="/">Profiles</Link>
				</li>
				<li>
					<Link to="/why-ofppt">Why OFPPT</Link>
				</li>
			</ul>
		</>
	);
}
