import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

import { translateToRu, orderToTime } from '../utils/functions';
import jsonSchedule from '../schedule.json';

const Schedule = () =>
{
	const navigate = useNavigate();
	const { state } = useLocation();
	const { date } = state || startOfToday();
	const daySchedule = jsonSchedule.schedule.find((value) => (value.day === getDay(date)));

	const redurectToCalendar = () => { navigate('/') };

	console.log(daySchedule);

	return (
		<div className='schedule'>
			<div className='schedule-header'>
				<div className='button-wrapper'>
					<div className='icon-button' onClick={() => { }}>
						<div className='icon icon-prev'/>
					</div>
				</div>

				<div className='header-text'>
					<div className='day'>{format(date, 'd')}</div>
					<div>{translateToRu(format(date, 'MMMM'), false)}</div>
				</div>
				<div className='button-wrapper'>
					<div className='icon-button' onClick={() => { }}>
						<div className='icon icon-next'/>
					</div>
				</div>

				<div className='button-wrapper'>
					<div className='icon-button' onClick={redurectToCalendar}>
						<div className='icon icon-calendar'/>
					</div>
				</div>

				
			</div>

			<div className='lessons-list'>
				{
					daySchedule && daySchedule.lessons && 
					daySchedule.lessons.map((lesson, index) => (
						<div className='lesson-card'>
							<div className='lesson-card-header'>
								<div className='lesson-order'>{lesson.order}</div>
								<div className='lesson-type'>{lesson.type}</div>
								<div className='lesson-time'>{orderToTime(lesson.order)}</div>
							</div>
						</div>
					))
				}
			</div>
		</div>
	);
}

export default Schedule;