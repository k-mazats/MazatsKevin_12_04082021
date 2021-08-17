import MainNav from '../MainNav/MainNav';

import { ReactComponent as Logo } from '../../../assets/svg/logo.svg';
import './Header.css'

/**
 * Header component.
 *
 * @component
 *
 */
const Header = () => {
	return (
		<header className="header">
			<Logo className="header__logo"></Logo>
      <MainNav></MainNav>
		</header>
	);
};

export default Header;
