import './MainNav.css'

/**
 * Main nav component.
 *
 * @component
 *
 */
const MainNav = () => {
	return (
		<nav className="main-nav">
			<ul className="main-nav__list">
        <li>Accueil</li>
        <li>Profile</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
		</nav>
	);
};

export default MainNav;
