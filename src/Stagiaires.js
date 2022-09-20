import React, { useState } from "react";
import Stagiaire from "./Stagiaire";
import "./Stagiaires.css";
import axios from "axios";
import img1 from "./img/HamzaBrb.jpeg";
import { useEffect } from "react";

function Stagiaires() {
	const [stagiaires, setStagiaires] = useState([]);

	useEffect(() => {
		getProfile();
	}, []);

	function getProfile() {
		axios
			.get(`http://localhost:8888/api/profile/`)
			.then(function (response) {
				if (response.data.length > 0) setStagiaires(response.data);
			});
		console.log("stagiaires: ", stagiaires);
	}
	return (
		<div className="stagiaires">
			{stagiaires.map((s) => (
				<Stagiaire
					key={s.id}
					img={s.picture != "img1" ? s.picture : img1}
					name={s.name}
					age={s.age}
					tele={s.tele}
					address={s.address}
					email={s.email}
					nat={s.nat}
					cv={s.cv}
				/>
			))}
		</div>
	);
}

export default Stagiaires;
