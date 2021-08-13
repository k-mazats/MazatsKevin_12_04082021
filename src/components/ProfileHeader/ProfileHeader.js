

import './ProfileHeader.css';
const ProfileHeader = (props) => {
	return (
		<div className="profil-header">
			<div className="profil-header__hello">Bonjour <span className="profile-header__name">{props.user?.userInfos.firstName}</span></div>
			<div className="profil-header__greetings">
				Félicitation ! Vous avez explosé vos objectifs hier 👏
			</div>
		</div>
	);
};

export default ProfileHeader;
