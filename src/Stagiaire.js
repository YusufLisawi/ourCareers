import React from "react";
import { Link } from "react-router-dom";
import "./Stagiaire.css";
function Stagiaire({ img, name, age, tele, nat, address, email, cv }) {
	return (
		<div className="stagiaire">
			<img src={img} className="stagiaire__img" alt="stagiaire__photo" />
			<div className="stagiaire__info">
				<h2>{name}</h2>
				<p>
					<span>Age</span> {age}
				</p>
				<p>
					<span>Telephone</span> {tele}
				</p>
				<p>
					<span>Nationality</span> {nat}
				</p>
				<p>
					<span>Address</span> {address}
				</p>
				<p>
					<span>Email</span> {email}
				</p>
				<div className="btns">
					<a
						href={cv}
						target="BLANK"
						style={{ paddingRight: "10px" }}
					>
						<button className="btn">CV</button>
					</a>
					<Link to="/edit">
						<button className="btn">Edit</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Stagiaire;
