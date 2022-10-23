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
  
const translateToRu = (month) =>
{
	switch (month)
	{
		case 'January':		return 'Январь';
		case 'February':	return 'Февраль';
		case 'March':		return 'Март';
		case 'April':		return 'Апрель';
		case 'May': 		return 'Май';
		case 'June':		return 'Июнь';
		case 'July':		return 'Июль';
		case 'August':		return 'Август';
		case 'September':	return 'Сентябрь';
		case 'October':		return 'Октябрь';
		case 'November':	return 'Ноябрь';
		case 'December':	return 'Декабрь';
	}
}

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
	
	return (
		<div className='calendar'>
			<div className='calendar-header'>
				<div className='button-wrapper'>
					<div className='header-button' onClick={previousMonth}>
						<div className='icon icon-prev'/>
					</div>
				</div>
				
				<div className='header-text'>
					<div className='header-month'>{translateToRu(format(firstDayCurrentMonth, 'MMMM'))}</div>
					<div className='header-year'>{format(firstDayCurrentMonth, 'yyyy')}</div>
				</div>
				
				<div className='button-wrapper'>
					<div className='header-button' onClick={nextMonth}>
						<div className='icon icon-next'/>
					</div>
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
					days.map((value, index) =>
					(
						index === 0 ? 
							<div key={value.toString()}
								style={{ 'gridColumnStart': getDay(value).toString() }}
								className={"calendar-item " + (isEqual(value, today) ? "today" : "")}>
								{index + 1}
							</div>
							:
							<div key={value.toString()}
								className={"calendar-item " + (isEqual(value, today) ? "today" : "")}>
								{index + 1}
							</div>
					))
				}
			</div>
		</div>
	);
}

export default Calendar;