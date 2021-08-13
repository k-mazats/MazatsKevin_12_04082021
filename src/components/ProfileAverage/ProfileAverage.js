import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	// Legend,
	ResponsiveContainer,
} from 'recharts';

import './ProfileAverage.css';

const ProfileAverage = (props) => {
	const getTooltip = (value, name, props) => {
		return [`${value} `, null, props];
	};
	const getDay = (dayId) => {
		const dayObject = {
			1: 'L',
			2: 'M',
			3: 'M',
			4: 'J',
			5: 'V',
			6: 'S',
			7: 'D',
		};
		return dayObject[dayId];
	};
	return (
		<div className="profile-average">
			<div className="profile-average__header">Durée moyenne des sessions</div>
			<div className="profile-average__chart">
				{props.averageSessions ? (
					<ResponsiveContainer>
						<LineChart data={props.averageSessions.sessions}>
							<XAxis
								tickLine={false}
								axisLine={false}
								tick={{ fill: '#FFFFFF', fontSize: 12 }}
								padding={{ left: 10, right: 10 }}
								dataKey="day"
								tickFormatter={getDay}
							/>
							<YAxis
								hide="true"
								dataKey="sessionLength"
								yAxisId="sessionLength"
							/>
							<Tooltip
								labelStyle={{ display: 'none' }}
								itemStyle={{
									textAlign: 'center',
									color: '#000000',
									fontSize: 8,
								}}
								contentStyle={{ background: '#FFFFFF', border: 'none' }}
								formatter={getTooltip}
							/>
							{/* <Legend /> */}
							<Line
								dataKey="sessionLength"
								yAxisId="sessionLength"
								stroke="#FFFFFF"
								dot={false}
								unit="min"
								type="monotone"
								strokeWidth={2}
							/>
						</LineChart>
					</ResponsiveContainer>
				) : null}
			</div>
		</div>
	);
};

export default ProfileAverage;
