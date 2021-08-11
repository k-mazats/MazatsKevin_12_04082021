import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

import './ProfileAverage.css'

const ProfileAverage = (props) => {
	return (
		<div className="profile-average">
			<ResponsiveContainer>
				
				<LineChart data={props.averageSessions.sessions}>
					<XAxis
						tickLine={false}
						axisLine={false}
						tick={{ fill: '#FFFFFF' }}
						padding={{ left: 10, right: 10 }}
					/>
					<YAxis hide="true" yAxisId="sessionLength" />
					<Tooltip />
					{/* <Legend /> */}
					<Line
						dataKey="sessionLength"
						yAxisId="sessionLength"
						stroke="#FFFFFF"
						dot={false}
						unit="min"
						type="monotone"
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ProfileAverage;
