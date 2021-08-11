import { useEffect, useState } from 'react';
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	ResponsiveContainer,
} from 'recharts';

import './ProfilePerformances.css';

const ProfilePerformances = (props) => {
	const [outerRadius, setOuterRadius] = useState();
	const getKind = (kindId) => {
		const kind = props.performances.kind[kindId];
		return kind.charAt(0).toUpperCase() + kind.slice(1);
	};
	const getOuterRadius = () => {
		if (window.matchMedia('(max-width: 1250px)').matches) {
			setOuterRadius('35%');
		} else if (window.matchMedia('(max-width: 1450px)').matches) {
			setOuterRadius('40%');
		} else if (window.matchMedia('(max-width: 1550px)').matches) {
			setOuterRadius('50%');
		} else if (window.matchMedia('(max-width: 1650px)').matches) {
			setOuterRadius('70%');
		} else{
			setOuterRadius('80%');
		}
	};
	useEffect(() => {
		getOuterRadius();
		window.addEventListener('resize', getOuterRadius);
	}, []);
	return (
		<div className="profile-performances">
			<ResponsiveContainer>
				<RadarChart
					// cx="50%"
					// cy="50%"
					outerRadius={outerRadius}
					data={props.performances.data}
				>
					<PolarGrid />
					<PolarAngleAxis
						dataKey="kind"
						stroke="#FFFFFF"
						tickLine={false}
						axisLine={false}
						tick={{ fontSize: 12, lineHeight: 24 }}
						tickFormatter={getKind}
					/>
					<PolarRadiusAxis
						dataKey="value"
						domain={[0, 'dataMax + 25']}
						tick={false}
						axisLine={false}
					/>
					<Radar
						dataKey="value"
						fill="#FF0101
"
						fillOpacity={0.7}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ProfilePerformances;