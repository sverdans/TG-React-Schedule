import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Calendar, Schedule } from './components'

import './styles/app.scss';

const App = () => {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<Calendar />} />
				<Route path='/schedule' element={<Schedule />} />
			</Routes>
		</div>
	);
}

export default App;
