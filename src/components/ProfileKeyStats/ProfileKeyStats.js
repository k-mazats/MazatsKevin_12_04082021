import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './ProfileKeyStats.css';

import KeyStat from './KeyStat/KeyStat.js';

import { ReactComponent as ProtIcon } from '../../assets/svg/key-stat-prot-icon.svg';
import { ReactComponent as CalIcon } from '../../assets/svg/key-stat-cal-icon.svg';
import { ReactComponent as FatIcon } from '../../assets/svg/key-stat-fat-icon.svg';
import { ReactComponent as CarbIcon } from '../../assets/svg/key-stat-carb-icon.svg';

/**
 * Component for generating KeyStats component for each stats in a given array.
 *
 * @component
 *
 */
const ProfileKeyStats = (props) => {
	const [keyStats, setKeyStats] = useState([]);

	/**
	 * Return KeyStats component with props based on given datas.
	 * @param   {array} 		stat  	Stat array ['stat name','stat value'] 
	 * @param   {number} 		index  	Index of stat object in stats array
	 * @return  {element}						Return React component
	 */
	const statSwitch = (stat, index) => {
		switch (stat[0]) {
			case 'calorieCount':
				return (
					<KeyStat
						key={`keyStat-${index}`}
						statName="Calories"
						statCount={stat[1]}
						statUnit="kCal"
						backgroundColor="rgba(255, 0, 0, 0.1)"
					>
						<CalIcon></CalIcon>
					</KeyStat>
				);
			case 'proteinCount':
				return (
					<KeyStat
						key={`keyStat-${index}`}
						statName="Proteines"
						statCount={stat[1]}
						statUnit="g"
						backgroundColor="rgba(74, 184, 255, 0.1)"
					>
						<ProtIcon></ProtIcon>
					</KeyStat>
				);
			case 'carbohydrateCount':
				return (
					<KeyStat
						key={`keyStat-${index}`}
						statName="Glucides"
						statCount={stat[1]}
						statUnit="g"
						backgroundColor="rgba(249, 206, 35, 0.1)"
					>
						<CarbIcon></CarbIcon>
					</KeyStat>
				);
			case 'lipidCount':
				return (
					<KeyStat
						key={`keyStat-${index}`}
						statName="Lipides"
						statCount={stat[1]}
						statUnit="g"
						backgroundColor="rgba(253, 81, 129, 0.1)"
					>
						<FatIcon></FatIcon>
					</KeyStat>
				);
			default:
				break;
		}
	};

	useEffect(() => {
		if (props.user) {
			const statsArray = Object.keys(props.user.keyData).map((key) => [
				key,
				props.user.keyData[key],
			]);
			setKeyStats(statsArray);
		}
	}, [props]);

	return (
		<div className="profile-key-stats">
			{keyStats ? keyStats.map((stat, index) => statSwitch(stat, index)) : null}
		</div>
	);
};

ProfileKeyStats.propTypes = {
	user: PropTypes.shape({
		id: PropTypes.number,
		keyData: PropTypes.shape({
			calorieCount: PropTypes.number,
			carboHydrateCount: PropTypes.number,
			lipidCount: PropTypes.number,
			proteineCount: PropTypes.number,
		}),
		todayScore: PropTypes.number,
		userInfos: PropTypes.shape({
			age: PropTypes.number,
			firstName: PropTypes.string,
			lastName: PropTypes.string,
		}),
	}),
};

export default ProfileKeyStats;
