export const translateToRu = (month, isCalendar) =>
{
	if (isCalendar)
	{
		switch (month)
		{
			case 'January': 	return 'Январь';
			case 'February':	return 'Февраль';
			case 'March': 		return 'Март';
			case 'April': 		return 'Апрель';
			case 'May': 		return 'Май';
			case 'June': 		return 'Июнь';
			case 'July': 		return 'Июль';
			case 'August': 		return 'Август';
			case 'September':	return 'Сентябрь';
			case 'October': 	return 'Октябрь';
			case 'November': 	return 'Ноябрь';
			case 'December': 	return 'Декабрь';
			default:			return '';
			
		}
	}
	else
	{
		switch (month)
		{
			case 'January': 	return 'января';
			case 'February': 	return 'февраля';
			case 'March': 		return 'марта';
			case 'April': 		return 'апреля';
			case 'May': 		return 'мая';
			case 'June':		return 'июня';
			case 'July': 		return 'июля';
			case 'August': 		return 'августа';
			case 'September': 	return 'сентября';
			case 'October': 	return 'октября';
			case 'November': 	return 'ноября';
			case 'December': 	return 'декабря';
			default:			return '';
		}
	}
}

export const orderToTime = (order) =>
{
	switch (order)
	{
		case 1: return '9:00 - 10:30';
		case 2: return '10:50 - 12:20';
		case 3: return '12:40 - 14:10';
		case 4: return '14:55 - 16:25';
		case 5: return '16:25 - 18:15';
		case 6: return '18:30 - 20:00';
		default: return '';
	}
}
