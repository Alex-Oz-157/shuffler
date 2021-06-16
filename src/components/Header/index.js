import React from 'react';
import { useState } from 'react';

const Header = () => {

	const [showMenu, setMenu] = useState(false);

	const handleShowMenu = () => {
		setMenu(!showMenu)
	};

	return (
		<>
			<header>
				<button className="burger" onClick={handleShowMenu}>
					<span className="bar"></span>
				</button>
				<nav className={`navigation ${showMenu ? "active" : " "}`}>
					<ul className="menuLinks"> 
						<li className="link">Hi, Alex...</li>       
						<li className="link"><a href="file:///Users/alexma/Sites/music_player/public/index.html">My account</a></li>
						<li className="link"><a href="file:///Users/alexma/Sites/music_player/public/index.html">My favorites</a></li>
						<li className="link"><a href="file:///Users/alexma/Sites/music_player/public/index.html">Settings</a></li>
					</ul>
					<h1 className="appName">Shuffler</h1>
				</nav>
			</header>
		</>

	);
}

export default Header;