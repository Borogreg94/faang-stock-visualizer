import './App.css';
import React, { useLayoutEffect, useState } from 'react';
import Header from './Header';
import CurrentData from './CurrentData';
import { useTheme } from '@material-ui/core/styles';

const apiKey = 'VJDZ8928RWUZRZKY';

function App() {
	const [FB, setFB] = useState({ name: 'Facebook' });
	const [AAPL, setAAPL] = useState({ name: 'Apple' });
	const [AMZN, setAMZN] = useState({ name: 'Amazon' });
	const [NFLX, setNFLX] = useState({ name: 'Netflix' });
	const [GOOGL, setGOOGL] = useState({ name: 'Google' });

	const [curSelect, setCurSelect] = useState('FB');

	const theme = useTheme();
	const palle = theme.palette[curSelect];

	function stateSetter(json, symbol) {
		switch (symbol) {
			case 'FB':
				setFB({
					'Meta Data': { ...json['Meta Data'] },
					'Time Series (Daily)': { ...json['Time Series (Daily)'] },
					name: 'FaceBook',
				});
				break;
			case 'AAPL':
				setAAPL({
					'Meta Data': { ...json['Meta Data'] },
					'Time Series (Daily)': { ...json['Time Series (Daily)'] },
					name: 'Apple',
				});
				break;
			case 'AMZN':
				setAMZN({
					'Meta Data': { ...json['Meta Data'] },
					'Time Series (Daily)': { ...json['Time Series (Daily)'] },
					name: 'Amazon',
				});
				break;
			case 'NFLX':
				setNFLX({
					'Meta Data': { ...json['Meta Data'] },
					'Time Series (Daily)': { ...json['Time Series (Daily)'] },
					name: 'Netflix',
				});
				break;
			case 'GOOGL':
				setGOOGL({
					'Meta Data': { ...json['Meta Data'] },
					'Time Series (Daily)': { ...json['Time Series (Daily)'] },
					name: 'Google',
				});
				break;
			default:
				break;
		}
	}

	async function getGlobalQuote(symbol) {
		try {
			const response = await fetch(
				`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`
			);
			const json = await response.json();
			if (!json.Note) {
				stateSetter(json, symbol);
			} else {
				console.log('No Response From API');
			}
		} catch (err) {
			console.log(err);
		}
	}

	useLayoutEffect(() => {
		getGlobalQuote('FB');
		getGlobalQuote('AAPL');
		getGlobalQuote('AMZN');
		getGlobalQuote('NFLX');
		getGlobalQuote('GOOGL');
	}, []);

	const data = { FB, AAPL, AMZN, NFLX, GOOGL };

	return (
		<div
			className='App'
			style={{
				backgroundColor: palle.secondary,
				transition: 'background-color 2s',
			}}>
			<Header setCurSelect={setCurSelect} />

			{data[curSelect]['Meta Data'] ? (
				<CurrentData data={data[curSelect]} />
			) : null}
		</div>
	);
}

export default App;
