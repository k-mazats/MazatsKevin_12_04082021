import PropTypes from 'prop-types';

import './ProfileDailyLegend.css';

/**
 * Component for generating custom legend for daily stats chart.
 *
 * @component
 *
 */
const ProfileDailyLegend = (props) => {
	return <span className="profile-daily__legend">{props.value}</span>;
};

ProfileDailyLegend.propTypes = {
	value: PropTypes.string,
};

export default ProfileDailyLegend;
