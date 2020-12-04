import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		FB: {
			primary: '#365899',
			secondary: '#e9ebee',
			third: '#4267b2',
		},
		AAPL: {
			primary: '#000000',
			secondary: '#ffffff',
			third: '#666666',
		},
		AMZN: {
			primary: '#232f30',
			secondary: '#d6d849',
			third: '#5a6484',
		},
		NFLX: {
			primary: '#db0000',
			secondary: '#000000',
			third: '#ffffff',
		},
		GOOGL: {
			primary: '#34a853',
			secondary: '#4285f4',
			third: '#fbc034',
		},
	},
	typography: {
		fontFamily: ['"Oswald"', '"Work Sans"', '"serif"'].join(','),
	},
});

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
