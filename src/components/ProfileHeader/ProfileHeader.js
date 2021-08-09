

import './ProfileHeader.css';
const ProfileHeader = (props) => {
	return (
		<div className="profil-header">
			<div className="profil-header__hello">Bonjour {props.user.userInfos.firstName}</div>
			<div className="profil-header__greetings">
				Félicitation ! Vous avez explosé vos objectifs hier 👏
			</div>
		</div>
	);
};

export default ProfileHeader;
