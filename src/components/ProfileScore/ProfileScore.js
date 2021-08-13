import {
	RadialBarChart,
	PolarAngleAxis,
	RadialBar,
	Legend,
	ResponsiveContainer,
} from 'recharts';

import './ProfileScore.css';

const ProfileScore = (props) => {
	const getLegend = (value, entry, index) => {
		return (
			<div>
				<div className="profile-score__legend-value">
					{entry.payload.todayScore * 100}%
				</div>
				<div className="profile-score__legend-text">de votre objectif</div>
			</div>
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

export default ProfileScore;
