import React from "react";
import Logo from "./Logo";
import Navs from "./Navs";
import "./Header.css";

function Header() {
	return (
		<div className="header">
			<Logo className="header__logo" />
			<Navs className="header__navs" />
		</div>
	);
}

export default Header;
