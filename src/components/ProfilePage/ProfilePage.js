import './ProfilePage.css';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import ProfileKeyStats from '../ProfileKeyStats/ProfileKeyStats';
import ProfileDaily from '../ProfileDaily/ProfileDaily';
import ProfileAverage from '../ProfileAverage/ProfileAverage';
import ProfilePerformances from '../ProfilePerformances/ProfilePerformances';

import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../api/mocks/user';

const ProfilePage = () => {
	return (
		<div className="profile">
			<ProfileHeader user={USER_MAIN_DATA}></ProfileHeader>
			<div className="profile-stats">
				<ProfileKeyStats user={USER_MAIN_DATA}></ProfileKeyStats>
				<ProfileDaily dailyActivity={USER_ACTIVITY}></ProfileDaily>
				<ProfileAverage averageSessions={USER_AVERAGE_SESSIONS}></ProfileAverage>
				<ProfilePerformances performances={USER_PERFORMANCE}></ProfilePerformances>
			</div>
		</div>
	);
};

export default ProfilePage;
