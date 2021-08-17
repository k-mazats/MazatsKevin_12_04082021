import './MainContent.css';
import ContentNav from '../ContentNav/ContentNav';
import ProfilePage from '../../ProfilePage/ProfilePage';

/**
 * Main content component.
 *
 * @component
 *
 */
const MainContent = () => {
	return (
		<main className="main">
			<ContentNav></ContentNav>
			<ProfilePage></ProfilePage>
		</main>
	);
};

export default MainContent;
