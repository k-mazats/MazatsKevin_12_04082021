import PropTypes from 'prop-types';

import {
	RadialBarChart,
	PolarAngleAxis,
	RadialBar,
	Legend,
	ResponsiveContainer,
} from 'recharts';

import ProfileScoreLegend from './ProfileScoreLegend/ProfileScoreLegend';

import './ProfileScore.css';

/**
 * Component for generating chart from today's score datas.
 *
 * @component
 *
 */
const ProfileScore = (props) => {
	/**
	 * Return formatted legend with custom style
	 * @param   {string} 		value  Axis name
	 * @param   {object} 		entry  Axis properties
	 * @return  {element}  		     Return React component
	 */
	const getLegend = (value, entry) => {
		return (
			<ProfileScoreLegend
				todayScore={entry.payload.todayScore}
			></ProfileScoreLegend>
		);
	};

	return (
		<div className="profile-score">
			<div className="profile-score__header">Score</div>
			{props.user ? (
				<ResponsiveContainer>
					<RadialBarChart
						innerRadius="90%"
						outerRadius="100%"
						barSize={10}
						margin={{ top: 40 }}
						data={[props.user]}
						startAngle={180}
						endAngle={-180}
					>
						<PolarAngleAxis
							type="number"
							domain={[0, 1]}
							angleAxisId={0}
							tick={false}
						/>
						<RadialBar
							clockWise
							dataKey="todayScore"
							cornerRadius={5}
							fill="#FF0000"
						/>
						<Legend
							formatter={getLegend}
							iconSize={0}
							layout="vertical"
							verticalAlign="middle"
							width={100}
						/>
					</RadialBarChart>
				</ResponsiveContainer>
			) : null}
		</div>
	);
};

ProfileScore.propTypes = {
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

export default ProfileScore;
