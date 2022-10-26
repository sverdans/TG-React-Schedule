import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	eachDayOfInterval,
	startOfToday,
	endOfMonth,
	isEqual,
	format,
	getMonth,
	getDay,
	parse,
	add,
} from 'date-fns';

import { getMonthName } from '../utils/functions';

const Calendar = () =>
{
	const navigate = useNavigate();

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
	
	const redurectToSchedule = (date) =>
	{
		navigate('/schedule', { state: { date } });
	};
	
	return (
		<div className='calendar'>
			<div className='calendar-header'>
				<div className='button-wrapper'>
					<button className='icon-button' onClick={previousMonth}>
						<div className='icon icon-prev'/>
					</button>
				</div>
				
				<div className='header-text'>
					<div className='header-month'>{getMonthName(getMonth(firstDayCurrentMonth), true)}</div>
					<div className='header-year'>{format(firstDayCurrentMonth, 'yyyy')}</div>
				</div>
				
				<div className='button-wrapper'>
					<button className='icon-button' onClick={nextMonth}>
						<div className='icon icon-next'/>
					</button>
				</div>

			</div>
			<div className='calendar-line header'>
				<div>Пн</div>
				<div>Вт</div>
				<div>Ср</div>
				<div>Чт</div>
				<div>Пт</div>
				<div>Сб</div>
				<div>Вс</div>
			</div>
			
			<div className='calendar-line'>
				{
					days && 
					days.map((date, index) =>
					(
						index === 0 ? 
							<div key={date.toString()}
								style={{ 'gridColumnStart': getDay(date).toString() }}
								className={"calendar-item " + (isEqual(date, today) ? "today" : "")}
								onClick={() => { redurectToSchedule(date) }}>
								{index + 1}
							</div>
							:
							<div key={date.toString()}
								className={"calendar-item " + (isEqual(date, today) ? "today" : "")}
								onClick={() => { redurectToSchedule(date) }}>
								{index + 1}
							</div>
					))
				}
			</div>
		</div>
	);
}

export default Calendar;