import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Chart } from 'react-charts';
import { useTheme } from '@material-ui/core/styles';

export default function VisualGraph(props) {
	const { dailyQuoteValues, dailyQuoteDates, metaData } = props;

	const theme = useTheme();
	const palle = theme.palette[metaData['2. Symbol']];

	let newArr = [];

	for (let i = 10; i >= 0; i--) {
		const dataPoint = {
			primary: dailyQuoteDates[i],
			secondary: dailyQuoteValues[i]['4. close'],
		};
		newArr.push(dataPoint);
	}

	console.log('newArr', newArr);

	const data = React.useMemo(
		() => [
			{
				label: 'Daily Closing Price',
				data: newArr,
			},
		],
		[dailyQuoteValues]
	);

	const axes = React.useMemo(
		() => [
			{ primary: true, type: 'ordinal', position: 'bottom' },
			{ type: 'linear', position: 'left', format: (d) => `$${d}` },
		],
		[]
	);

	const getSeriesStyle = React.useCallback(
		() => ({
			color: palle.primary,
			transition: 'all .5s ease',
		}),
		[dailyQuoteValues]
	);

	const getDatumStyle = React.useCallback(
		() => ({
			transition: 'all .5s ease',
		}),
		[dailyQuoteValues]
	);

	return (
		<Grid container justify='center'>
			<Grid item xs={12} style={{ padding: '40px', paddingTop: '50px' }}>
				<div
					style={{
						width: '100%',
						height: '300px',
						paddingTop: '10px',
					}}>
					<Chart
						data={data}
						axes={axes}
						getSeriesStyle={getSeriesStyle}
						getDatumStyle={getDatumStyle}
						dark={metaData['2. Symbol'] === 'NFLX' ? true : false}
					/>
				</div>
			</Grid>

			<Grid item xs={12}>
				<Typography style={{ color: palle.primary, transition: 'color 1s' }}>
					- Daily Closing Price
				</Typography>
			</Grid>
		</Grid>
	);
	// return null
}

//   "Time Series (Daily)": {
//         "2020-12-02": {
//             "1. open": "122.02",
//             "2. high": "123.37",
//             "3. low": "120.89",
//             "4. close": "123.08",
//             "5. adjusted close": "123.08",
//             "6. volume": "80009849",
//             "7. dividend amount": "0.0000",
//             "8. split coefficient": "1.0"
//         },
//         "2020-12-01": {
//             "1. open": "121.01",
//             "2. high": "123.4693",
//             "3. low": "120.01",
//             "4. close": "122.72",
//             "5. adjusted close": "122.72",
//             "6. volume": "125920963",
//             "7. dividend amount": "0.0000",
//             "8. split coefficient": "1.0"
//         },
