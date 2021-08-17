import getData from '../../api/api';

import { useState, useEffect } from 'react';

import ProfileHeader from '../ProfileHeader/ProfileHeader';
import ProfileKeyStats from '../ProfileKeyStats/ProfileKeyStats';
import ProfileDaily from '../ProfileDaily/ProfileDaily';
import ProfileAverage from '../ProfileAverage/ProfileAverage';
import ProfilePerformances from '../ProfilePerformances/ProfilePerformances';
import ProfileScore from '../ProfileScore/ProfileScore';

import './ProfilePage.css';

/**
 * Component fetching data and forwarding it to children components.
 *
 * @component
 *
 */
const ProfilePage = () => {
	const userId = 12;
	const [userDatas, setUserDatas] = useState();
	const [userActivity, setUserActivity] = useState();
	const [userAverage, setUserAverage] = useState();
	const [userPerformance, setUserPerformance] = useState();

	useEffect(() => {
		getData(userId)
			.then((res) => res.data.data)
			.then((data) => setUserDatas(data));

		getData(userId, 'activity')
			.then((res) => res.data.data)
			.then((data) => setUserActivity(data));

		getData(userId, 'average-sessions')
			.then((res) => res.data.data)
			.then((data) => setUserAverage(data));

		getData(userId, 'performance')
			.then((res) => res.data.data)
			.then((data) => setUserPerformance(data));
	}, [userId]);
	return (
		<div className="profile">
			<ProfileHeader user={userDatas}></ProfileHeader>
			<div className="profile-stats">
				<ProfileKeyStats user={userDatas}></ProfileKeyStats>
				<ProfileDaily dailyActivity={userActivity}></ProfileDaily>
				<ProfileAverage averageSessions={userAverage}></ProfileAverage>
				<ProfilePerformances
					performances={userPerformance}
				></ProfilePerformances>
				<ProfileScore user={userDatas}></ProfileScore>
			</div>
		</div>
	);
};

export default ProfilePage;
