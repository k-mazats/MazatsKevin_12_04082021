import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	ResponsiveContainer,
} from 'recharts';

import './ProfilePerformances.css'

const ProfilePerformances = (props) => {
	const getKind = (kindId) => {
		const kind = props.performances.kind[kindId]
		return kind.charAt(0).toUpperCase() + kind.slice(1);
	}
	return (
		<div className="profile-performances">
			<ResponsiveContainer>
				<RadarChart
					// cx="50%"
					// cy="50%"
					outerRadius="30%"
					data={props.performances.data}
				>
					<PolarGrid />
					<PolarAngleAxis
						dataKey="kind"
						stroke="#FFFFFF"
						tickLine={false}
						axisLine={false}
						tick={{fontSize: 12, lineHeight: 24}}
						tickFormatter={getKind}
					/>
					<PolarRadiusAxis
						dataKey="value"
						domain={[0, 'dataMax + 25']}
						tick={false}
						axisLine={false}
					/>
					<Radar dataKey="value" stroke="#FFFFFF" fill="#FFFFFF" />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
};


export default ProfilePerformances;