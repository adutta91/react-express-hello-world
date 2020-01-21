import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './app.scss';

const App = () => {
	let interval;

	// default time to current time
	const [time, setTime] = useState(moment());

	// on component mount, start clock interval to update every second
	useEffect(() => {
		interval = setInterval(() => {
			setTime(moment());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<section className='app-container'>
			<h1>Hello World</h1>
			<section className='clock'>
				<section className='date'>{time.format('MMM Do, YYYY')}</section>
				<section className='time'>{time.format('HH:mm:ss')}</section>
			</section>
		</section>
	);
};

export default App;
