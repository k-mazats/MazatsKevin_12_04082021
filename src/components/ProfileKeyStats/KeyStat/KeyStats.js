import PropTypes from 'prop-types';

import './KeyStat.css';

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
	backgroundColor: PropTypes.string,
	children: PropTypes.element,
	statCount: PropTypes.number,
	statName: PropTypes.string,
	statUnit: PropTypes.string,
}
export default KeyStat;
