import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import AnimatedNumber from 'animated-number-react';

export default function TopInfo(props) {
	const { dailyQuoteValues, metaData, companyName } = props;

	const mostRecentQuote = dailyQuoteValues[0];

	const rawPointChange =
		mostRecentQuote['4. close'] - mostRecentQuote['1. open'];
	const pointChange = roundNum(rawPointChange);

	const rawPercentChange =
		((mostRecentQuote['4. close'] - mostRecentQuote['1. open']) /
			mostRecentQuote['1. open']) *
		100;
	const percentChange = roundNum(rawPercentChange);

	const changeColor = pointChange > 0 ? 'green' : 'red';

	const theme = useTheme();
	const palle = theme.palette[metaData['2. Symbol']];

	const useStyles = makeStyles((theme) => ({
		root: {
			paddingLeft: '30px',
			paddingRight: '30px',
		},
		columnItem: {
			display: 'flex',
		},
		columnItem2: {
			display: 'flex',
			justifyContent: 'space-between',
		},
		primary: {
			color: palle.primary,
			transition: 'color 2s',
		},
		secondary: {
			color: palle.secondary,
			transition: 'color 2s',
		},
		third: {
			color: palle.third,
			transition: 'color 2s',
		},
		posNeg: {
			color: changeColor,
		},
		topLine: {
			height: 'fit-content',
			marginLeft: '20px',
			alignSelf: 'center',
		},
		paper: {
			backgroundColor: 'transparent',
			padding: '5px',
			width: '100%',
		},
	}));
	const classes = useStyles();

	function roundNum(num) {
		return Math.round(num * 100) / 100;
	}
	const formatDollar = (value) => value.toFixed(2);

	return (
		<Grid className={classes.root} container alignItems='center'>
			<Grid item container direction='column' xs>
				<Grid item className={classes.columnItem}>
					<Typography
						className={[classes.companyName, classes.primary]}
						variant='h2'
						noWrap>
						{companyName}
					</Typography>
					<Typography
						className={classes.third}
						style={{
							height: 'fit-content',
							marginLeft: '5px',
							alignSelf: 'center',
						}}
						variant='h5'
						noWrap>
						({metaData['2. Symbol']})
					</Typography>
				</Grid>

				<Grid item className={classes.columnItem}>
					<Typography className={classes.primary} variant='h4' noWrap>
						$
						<AnimatedNumber
							value={mostRecentQuote['4. close']}
							formatValue={formatDollar}
						/>
					</Typography>

					<Typography
						className={[classes.topLine, classes.posNeg]}
						variant='h6'
						noWrap>
						{' '}
						<AnimatedNumber value={pointChange} formatValue={formatDollar} />
					</Typography>
					{pointChange > 0 ? (
						<TrendingUpIcon className={classes.posNeg} />
					) : (
						<TrendingDownIcon className={classes.posNeg} />
					)}

					<Typography
						className={[classes.topLine, classes.posNeg]}
						variant='h6'
						noWrap>
						{' '}
						<AnimatedNumber value={percentChange} formatValue={formatDollar} />%
					</Typography>
					{pointChange > 0 ? (
						<TrendingUpIcon className={classes.posNeg} />
					) : (
						<TrendingDownIcon className={classes.posNeg} />
					)}
				</Grid>
			</Grid>

			<Grid item xs>
				<Typography variant='h6' className={classes.third}>
					Last Updated: {metaData['3. Last Refreshed']}
				</Typography>
			</Grid>

			<Grid item xs style={{ display: 'grid' }}>
				<Grid
					className={classes.third}
					container
					direction='column'
					style={{
						width: '300px',
						justifySelf: 'right',
						paddingTop: '10px',
					}}>
					<Grid item>
						<Typography className={classes.primary}>Daily Numbers</Typography>
					</Grid>
					<Grid item className={classes.columnItem2}>
						<Typography className={classes.parameterTitles} variant='h6' noWrap>
							Close
						</Typography>
						<Typography className={classes.parameterValues} variant='h6' noWrap>
							$
							<AnimatedNumber
								value={mostRecentQuote['4. close']}
								formatValue={formatDollar}
							/>
						</Typography>
					</Grid>

					<Grid item className={classes.columnItem2}>
						<Typography className={classes.parameterTitles} variant='h6' noWrap>
							Open
						</Typography>
						<Typography className={classes.parameterValues} variant='h6' noWrap>
							$
							<AnimatedNumber
								value={mostRecentQuote['1. open']}
								formatValue={formatDollar}
							/>
						</Typography>
					</Grid>

					<Grid item className={classes.columnItem2}>
						<Typography className={classes.parameterTitles} variant='h6' noWrap>
							Low/High
						</Typography>
						<Typography className={classes.parameterValues} variant='h6' noWrap>
							$
							<AnimatedNumber
								value={mostRecentQuote['3. low']}
								formatValue={formatDollar}
							/>
							/$
							<AnimatedNumber
								value={mostRecentQuote['2. high']}
								formatValue={formatDollar}
							/>
						</Typography>
					</Grid>

					<Grid item className={classes.columnItem2}>
						<Typography className={classes.parameterTitles} variant='h6' noWrap>
							Volume
						</Typography>
						<Typography className={classes.parameterValues} variant='h6' noWrap>
							<AnimatedNumber
								value={mostRecentQuote['6. volume']}
								formatValue={formatDollar}
							/>
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

// {
//     "Meta Data": {
//         "1. Information": "Daily Time Series with Splits and Dividend Events",
//         "2. Symbol": "AAPL",
//         "3. Last Refreshed": "2020-12-02",
//         "4. Output Size": "Compact",
//         "5. Time Zone": "US/Eastern"
//     },
//     "Time Series (Daily)": {
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
