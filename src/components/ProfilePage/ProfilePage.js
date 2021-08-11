import './ProfilePage.css';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import ProfileKeyStats from '../ProfileKeyStats/ProfileKeyStats';
import ProfileDaily from '../ProfileDaily/ProfileDaily';
import ProfileAverage from '../ProfileAverage/ProfileAverage';

import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS } from '../../api/mocks/user';

const ProfilePage = () => {
	return (
		<div className="profile">
			<ProfileHeader user={USER_MAIN_DATA}></ProfileHeader>
			<div className="profile-stats">
				<ProfileKeyStats user={USER_MAIN_DATA}></ProfileKeyStats>
				<ProfileDaily dailyActivity={USER_ACTIVITY}></ProfileDaily>
				<ProfileAverage averageSessions={USER_AVERAGE_SESSIONS}></ProfileAverage>
			</div>
		</div>
	);
};

export default ProfilePage;
