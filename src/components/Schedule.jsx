import React from 'react';
import { useLocation } from 'react-router-dom';

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

const Schedule = () =>
{
	const {state} = useLocation();
	const { date } = state || startOfToday();

	return (
		<div className='schedule'>
			{ date }
		</div>
	);
}

export default Schedule;