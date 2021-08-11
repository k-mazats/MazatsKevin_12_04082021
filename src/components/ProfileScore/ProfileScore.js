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
    return `${entry.payload.todayScore * 100}% de votre objectif quotidien`;
  };
	return (
		<div className="profile-score">
			<ResponsiveContainer>
				<RadialBarChart
					innerRadius="90%"
					outerRadius="100%"
					barSize={10}
					data={[props.user]}
					startAngle={180}
					endAngle={-180}
					// data={[{ todayScore: 0 }, props.user, { todayScore: 1 }]}
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
						fill="
#FF0000"
					/>
					<Legend formatter={getLegend} iconSize={0} layout="vertical" verticalAlign="middle" width={100}/>
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ProfileScore;
