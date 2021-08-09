import './ProfilePage.css';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import ProfileKeyStats from '../ProfileKeyStats/ProfileKeyStats';

import { USER_MAIN_DATA } from '../../api/mocks/user';

const ProfilePage = () => {
	return (
		<div className="profile">
			<ProfileHeader user={USER_MAIN_DATA}></ProfileHeader>
			<div className="profile-stats">
				<ProfileKeyStats user={USER_MAIN_DATA}></ProfileKeyStats>
			</div>
		</div>
	);
};

export default ProfilePage;
