import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

import './ProfileDaily.css';
const ProfileDaily = (props) => {
	const getDay = (date) => {
		let day = date.split('-')[2];
		return day.charAt(0) === '0' ? day.replace('0', '') : day;
	};
	const getTickCount = () => {
		let steps = props.dailyActivity.sessions.map((session) => session.kilogram)
		let tickCount =
			steps.reduce((a, b) => Math.max(a, b)) -
			steps.reduce((a, b) => Math.min(a, b)) + 3;
			return tickCount
	}
	return (
		<div className="profile-daily">
			<ResponsiveContainer>
				<BarChart
					data={props.dailyActivity.sessions}
					margin={{ top: 23, right: 29, bottom: 23, left: 43 }}
					barGap={4}
					barSize={7}
				>
					<CartesianGrid strokeDasharray="1" vertical={false} />

					<XAxis
						dataKey="day"
						tickFormatter={getDay}
						tickLine={false}
						tickSize={16}
					/>

					<YAxis
						orientation="left"
						yAxisId="left"
						dataKey="calories"
						hide="true"
					/>
					<YAxis
						orientation="right"
						yAxisId="right"
						dataKey="kilogram"
						tickLine={false}
						tickSize={45}
						domain={['dataMin - 1', 'dataMax + 1']}
						tickCount={getTickCount()}
						interval={0}
					/>
					<Tooltip/>
					<Legend
						verticalAlign="top"
						align="right"
						iconType="circle"
						iconSize={8}
						wrapperStyle={{
							paddingBottom: '47px',
						}}
					/>
					<Bar
						dataKey="kilogram"
						yAxisId="right"
						fill="#282D30"
						name="Poids"
						unit="kg"
						radius={[3.5, 3.5, 0, 0]}
					/>
					<Bar
						dataKey="calories"
						yAxisId="left"
						fill="#E60000"
						name="Calories brûlées"
						unit="kCal"
						radius={[3.5, 3.5, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ProfileDaily;
