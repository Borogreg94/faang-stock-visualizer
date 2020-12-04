import React from 'react';
import VisualGraph from './VisualGraph';
import TopInfo from './TopInfo';

export default function CurrentData(props) {
	const { data } = props;

	const dailyQuoteValues = Object.values(data['Time Series (Daily)']);

	const dailyQuoteDates = Object.keys(data['Time Series (Daily)']);

	const metaData = data['Meta Data'];

	const companyName = data.name;

	return (
		<>
			<TopInfo
				dailyQuoteValues={dailyQuoteValues}
				dailyQuoteDates={dailyQuoteDates}
				metaData={metaData}
				companyName={companyName}
			/>

			<VisualGraph
				dailyQuoteValues={dailyQuoteValues}
				dailyQuoteDates={dailyQuoteDates}
				metaData={metaData}
			/>
		</>
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
