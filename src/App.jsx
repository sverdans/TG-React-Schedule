import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Calendar, Schedule } from './components'

import './styles/app.scss';

const tg = window.Telegram.WebApp;

const App = () =>
{
	React.useEffect(() => { tg.ready() }, []);
	
	return (
		<div className='app'>
			<Routes>
				<Route index element={<Calendar />} />
				<Route path='schedule' element={<Schedule />} />
			</Routes>
		</div>
	);
}

export default App;
