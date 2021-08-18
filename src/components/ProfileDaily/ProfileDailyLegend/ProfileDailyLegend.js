import PropTypes from 'prop-types';

import './ProfileDailyLegend.css';

const ProfileDailyLegend = (props) => {
	return <span className="profile-daily__legend">{props.value}</span>;
};

ProfileDailyLegend.propTypes = {
	value: PropTypes.string,
};

export default ProfileDailyLegend;
