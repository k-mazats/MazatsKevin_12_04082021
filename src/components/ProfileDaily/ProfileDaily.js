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

import PropTypes from 'prop-types';

import ProfileDailyLegend from './ProfileDailyLegend/ProfileDailyLegend';

import './ProfileDaily.css';

/**
 * Component for generating chart from daily activity datas.
 *
 * @component
 *
 */
const ProfileDaily = (props) => {
	/**
	 * Return formated datas for chart tooltip
	 * @param   {number} value  Point value
	 * @param   {string} name   Axis name
	 * @param   {object} props  Axis properties
	 * @return  {array}          Return ["formatted value", "formatted name"]
	 */
	const getTooltip = (value, name, props) => {
		return [`${value} `, null, props];
	};
	/**
	 * Return tick value for days axis
	 * @param   {string} date  Date as a string 'YYYY-MM-DD'
	 * @return  {array}        Return day number in the month from string while removing the first number if equal to 0
	 */
	const getDay = (date) => {
		let day = date.split('-')[2];
		return day.charAt(0) === '0' ? day.replace('0', '') : day;
	};
	/**
	 * Return formatted legend with custom style
	 * @param   {string} 		value  Axis name
	 * @return  {element}  		     Return React component
	 */
	const renderLegend = (value) => {
		return <ProfileDailyLegend value={value}></ProfileDailyLegend>;
	};
	return (
		<div className="profile-daily">
			<div className="profile-daily__header">Activité quotidienne</div>
			{props.dailyActivity ? (
				<ResponsiveContainer>
					<BarChart
						data={props.dailyActivity.sessions}
						margin={{ top: 24, right: 29, bottom: 24, left: 43 }}
						barGap={4}
						barSize={7}
					>
						<CartesianGrid strokeDasharray="1" vertical={false} />

						<XAxis
							dataKey="day"
							tickFormatter={getDay}
							tickLine={false}
							tickSize={16}
							tick={{ fill: '#9B9EAC', fontSize: 14 }}
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
							tick={{ fill: '#9B9EAC', fontSize: 14 }}
							// tickCount={4}
							// interval={0}
						/>
						<Tooltip
							formatter={getTooltip}
							labelStyle={{ display: 'none' }}
							itemStyle={{ textAlign: 'center', color: '#FFFFFF', fontSize: 7 }}
							contentStyle={{ background: '#E60000', border: 'none' }}
						/>
						<Legend
							verticalAlign="top"
							align="right"
							iconType="circle"
							iconSize={8}
							formatter={renderLegend}
							wrapperStyle={{
								paddingBottom: '47px',
								fill: '#FFFFFF',
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
			) : null}
		</div>
	);
};

ProfileDaily.propTypes = {
	dailyActivity: PropTypes.shape({
		sessions: PropTypes.arrayOf(
			PropTypes.shape({
				calories: PropTypes.number,
				day: PropTypes.string,
				kilogram: PropTypes.number,
			})
		),
		userId: PropTypes.number,
	}),
};

export default ProfileDaily;
