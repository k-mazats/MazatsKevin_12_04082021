import './ProfilePage.css';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import ProfileKeyStats from '../ProfileKeyStats/ProfileKeyStats';
import ProfileDaily from '../ProfileDaily/ProfileDaily';

import { USER_MAIN_DATA, USER_ACTIVITY } from '../../api/mocks/user';

const ProfilePage = () => {
	return (
		<div className="profile">
			<ProfileHeader user={USER_MAIN_DATA}></ProfileHeader>
			<div className="profile-stats">
				<ProfileKeyStats user={USER_MAIN_DATA}></ProfileKeyStats>
				<ProfileDaily dailyActivity={USER_ACTIVITY}></ProfileDaily>
			</div>
		</div>
	);
};

export default ProfilePage;
