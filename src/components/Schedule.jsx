import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { add, differenceInDays, differenceInWeeks, format, getDay, getMonth } from 'date-fns';

import { getMonthName, orderToTime } from '../utils/functions';
import jsonSchedule from '../schedule.json';

const Schedule = () =>
{
	const { firstDay } = jsonSchedule;
	const navigate = useNavigate();
	const { state } = useLocation();
	const [date, setDate] = React.useState(state?.date || new Date());
	const redirectToCalendar = () => { navigate('/') };

	const nextDay = () => { setDate(add(date, { days: 1} )) }
	const previousDay = () => { setDate(add(date, { days: -1} )) }
	
	const isEvenWeek = differenceInWeeks(date, new Date(firstDay.year, firstDay.month - 1, firstDay.day)) % 2 != 0;

	const daySchedule = isEvenWeek ?
		jsonSchedule.scheduleEven.find((value) => (value.day === getDay(date)))
		:
		jsonSchedule.scheduleOdd.find((value) => (value.day === getDay(date)))
	
	return (
		<div className='schedule'>
			<div className='schedule-header'>
				<div className='button-wrapper'>
					<button className='icon-button' onClick={previousDay}>
						<div className='icon icon-prev'/>
					</button>
				</div>

				<div className='header-text'>
					<div className='day'>{format(date, 'd')}</div>
					<div>{getMonthName(getMonth(date), false)}</div>
				</div>
				<div className='button-wrapper'>
					<button className='icon-button' onClick={nextDay}>
						<div className='icon icon-next'/>
					</button>
				</div>

				<div className='button-wrapper'>
					<button className='icon-button' onClick={redirectToCalendar}>
						<div className='icon icon-calendar'/>
					</button>
				</div>
			</div>

			<div className='lessons-list'>
				{
					daySchedule ? (
					daySchedule.lessons && 
					daySchedule.lessons.map((lesson, index) => (
						<div className='lesson-card' key={index + lesson}>
							<div className='lesson-card-header'>
								<div className='lesson-order'>{lesson.order}</div>
								<div className='lesson-type'>{lesson.type}</div>
								<div className='lesson-time'>{orderToTime(lesson.order)}</div>
							</div>
							<div className='lesson-card-body'>
								<div className='lesson-name'>{lesson.name}</div>
							</div>
							<div className='lesson-footer'>
								<div className='lesson-auditorium'>{lesson.auditorium}</div>
							</div>
						</div>
					))
					)
						:
						<div className='weekend-title'>Выходной</div>
				}
				
			</div>
		</div>
	);
}

export default Schedule;