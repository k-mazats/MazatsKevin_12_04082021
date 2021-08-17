import PropTypes from 'prop-types';

import './ProfileHeader.css';
const ProfileHeader = (props) => {
	return (
		<div className="profil-header">
			<div className="profil-header__hello">
				Bonjour{' '}
				<span className="profile-header__name">
					{props.user?.userInfos.firstName}
				</span>
			</div>
			<div className="profil-header__greetings">
				Félicitation ! Vous avez explosé vos objectifs hier 👏
			</div>
		</div>
	);
};

ProfileHeader.propTypes = {
	user: PropTypes.shape({
		id: PropTypes.number,
		keyData: PropTypes.shape({
			calorieCount: PropTypes.number,
			carboHydrateCount: PropTypes.number,
			lipidCount: PropTypes.number,
			proteineCount: PropTypes.number,
		}),
		todayScore: PropTypes.number,
		userInfos: PropTypes.shape({
			age: PropTypes.number,
			firstName: PropTypes.string,
			lastName: PropTypes.string
		})
	}),
};

export default ProfileHeader;
