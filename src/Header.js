import React from 'react';
import {
	AppBar,
	Toolbar,
	Button,
	Grid,
	makeStyles,
	IconButton,
} from '@material-ui/core';

import fbIcon from './icons/facebook.svg';
import appleIcon from './icons/apple.svg';
import amazonIcon from './icons/amazon.svg';
import netflixIcon from './icons/netflix.svg';
import googleIcon from './icons/google.svg';

const useStyles = makeStyles({
	headerIcon: { width: '80px', color: 'red' },
});

export default function Header(props) {
	const { setCurSelect } = props;
	const classes = useStyles();

	return (
		<AppBar position='static' style={{ backgroundColor: 'grey' }}>
			<Grid container justify='space-evenly' alignItems='center'>
				<Grid item xs={2}>
					<IconButton
						onClick={() => {
							setCurSelect('FB');
						}}>
						<img className={classes.headerIcon} src={fbIcon} alt='fb' />
					</IconButton>
				</Grid>

				<Grid item xs={2}>
					<IconButton
						onClick={() => {
							setCurSelect('AAPL');
						}}>
						<img className={classes.headerIcon} src={appleIcon} alt='apple' />
					</IconButton>
				</Grid>

				<Grid item xs={2}>
					<IconButton
						onClick={() => {
							setCurSelect('AMZN');
						}}>
						<img className={classes.headerIcon} src={amazonIcon} alt='fb' />
					</IconButton>
				</Grid>

				<Grid item xs={2}>
					<IconButton
						onClick={() => {
							setCurSelect('NFLX');
						}}>
						<img className={classes.headerIcon} src={netflixIcon} alt='fb' />
					</IconButton>
				</Grid>

				<Grid item xs={2}>
					<IconButton
						onClick={() => {
							setCurSelect('GOOGL');
						}}>
						<img className={classes.headerIcon} src={googleIcon} alt='fb' />
					</IconButton>
				</Grid>
			</Grid>
		</AppBar>
	);
}
