import PropTypes from 'prop-types';

import './KeyStat.css';

/**
 * Component for displaying one single stat.
 *
 * @component
 *
 */
const KeyStat = (props) => {
	return (
		<div className="profile-key-stats__stat">
			<div
				className="profile-key-stats__stat-icon"
				style={{ backgroundColor: props.backgroundColor }}
			>
				{props.children}
			</div>
			<div className="profile-key-stats__stat-infos">
				<div className="profile-key-stats__stat-count">{`${props.statCount}${props.statUnit}`}</div>
				<div className="profile-key-stats__stat-name">{props.statName}</div>
			</div>
		</div>
	);
};


KeyStat.propTypes = {
	backgroundColor: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired,
	statCount: PropTypes.number.isRequired,
	statName: PropTypes.string.isRequired,
	statUnit: PropTypes.string.isRequired,
};
export default KeyStat;
