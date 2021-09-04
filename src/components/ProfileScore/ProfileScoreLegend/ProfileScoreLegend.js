import PropTypes from 'prop-types';

import './ProfileScoreLegend.css';

/**
 * Component for generating custom legend for score chart.
 *
 * @component
 *
 */
const ProfileScoreLegend = (props) => {
	return (
		<div>
			<div className="profile-score__legend-value">
				{props.todayScore * 100}%
			</div>
			<div className="profile-score__legend-text">de votre objectif</div>
		</div>
	);
};

ProfileScoreLegend.propTypes = {
	todayScore: PropTypes.number,
};

export default ProfileScoreLegend;
