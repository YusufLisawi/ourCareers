import React from "react";
import Header from "./Header";
import Stagiaires from "./Stagiaires";
import Ofppt from "./Ofppt";
import Admin from "./Admin";
import { Routes, Route } from "react-router-dom";
import Edit from "./Edit";

function App() {
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route path="/" element={<Stagiaires />} />
				<Route path="/why-ofppt" element={<Ofppt />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="/edit" element={<Edit />} />
				<Route path="*" component="" />
			</Routes>
		</div>
	);
}

export default App;
