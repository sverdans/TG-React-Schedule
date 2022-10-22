import React from 'react';
import {
	add,
	eachDayOfInterval,
	endOfMonth,
	format,
	getDay,
	isEqual,
	isSameDay,
	isSameMonth,
	isToday,
	parse,
	parseISO,
	startOfToday,
} from 'date-fns';
  
const Calendar = () =>
{
	let today = startOfToday();
	let [selectedDay, setSelectedDay] = React.useState(today);
	let [currentMonth, setCurrentMonth] = React.useState(format(today, 'MMM-yyyy'));
	let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

	let days = eachDayOfInterval({
		start: firstDayCurrentMonth,
		end: endOfMonth(firstDayCurrentMonth),
	})
	
	const previousMonth = () =>
	{
		let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
		setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
	}

	const nextMonth = () =>
	{
		let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
		setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
	}
	
	console.log(days);

	return (
		<div className="calendar">
			{
				days.map((value, index) =>
				(
					<div>{index + 1}</div>
				))
			}
		</div>
	);
}

export default Calendar;