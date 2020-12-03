import React, { useState, useEffect } from 'react'
import {Container, Grid, Typography, makeStyles} from '@material-ui/core'
import {useTheme} from '@material-ui/core/styles'
import VisualGraph from './VisualGraph'






export default function CurrentData(props){
    const {data} = props;
    
    const theme = useTheme()
    const palle = theme.palette[data["Meta Data"]["2. Symbol"]]

    const useStyles = makeStyles(theme => ({

        root: {
            textAlign: 'left'
        },
        columnItem: {
            display: "flex",
        },
        columnItem2: {
            display: "flex",
            justifyContent: 'space-between',
            color: palle.third
        },
        companyName: {
            fontSize: '100px',
        },
        primary:{
            color: palle.primary
        },
        secondary:{
            color: palle.secondary
        },
        third:{
            color: palle.secondary
        },
        topLine: {
            height:'fit-content',
             marginLeft: '20px',
             alignSelf: 'center'
        },
        parameterTitles:{
    
        },
        parameterValues: {
        }
    }))
    const classes = useStyles();


    function roundNum(num){
        return Math.round(num * 100)/100
    }

    const dailyQuoteValues =  Object.values(data["Time Series (Daily)"])

    const dailyQuoteDates = Object.keys(data["Time Series (Daily)"])

    const mostRecentQuote = dailyQuoteValues[0]

    const rawPointChange = mostRecentQuote["4. close"] - mostRecentQuote["1. open"]
    const pointChange = roundNum(rawPointChange)

    const rawPercentChange = ((mostRecentQuote["4. close"] - mostRecentQuote["1. open"])/(mostRecentQuote["1. open"])*100)
    const percentChange = roundNum(rawPercentChange)
    
    const changeColor = pointChange > 0 ? 'green' : 'red';
    
    
    

    return (
        
    <>
        <Grid className={classes.root} container justify='flex-start' alignItems='center' >

            <Grid item container direction='column' xs>
                <Grid item className={classes.columnItem}>
                    <Typography className={[classes.companyName, classes.primary]} variant="h2" noWrap>{data.name}</Typography>
                    <Typography style={{ height:'fit-content', marginLeft: '5px', alignSelf: 'center', color: palle.third}} variant="h5" noWrap>({data["Meta Data"]["2. Symbol"]})</Typography>
                </Grid>

                <Grid item className={classes.columnItem} >                
                    <Typography style={{color: palle.primary}} variant='h4' noWrap>${mostRecentQuote["1. open"]}</Typography>
                    <Typography className={classes.topLine} style={{color: changeColor}} variant="h6" noWrap> {pointChange}</Typography>
                    <Typography className={classes.topLine} style={{color: changeColor}} variant="h6" noWrap> {percentChange}%</Typography>
                </Grid>
            </Grid>


            <Grid item xs>
                <Grid container direction='column' style={{width: '300px'}}>
                    <Grid item className={classes.columnItem2}>
                        <Typography className={classes.parameterTitles} variant='h6' noWrap>Prev Close</Typography>
                        <Typography className={classes.parameterValues} variant='h6' noWrap>{mostRecentQuote["4. close"]}</Typography>
                    </Grid>

                    <Grid item  className={classes.columnItem2} >
                        <Typography className={classes.parameterTitles} variant='h6' noWrap>Open</Typography>
                        <Typography className={classes.parameterValues} variant='h6' noWrap>{mostRecentQuote["1. open"]}</Typography>
                    </Grid>

                    <Grid item  className={classes.columnItem2} >
                        <Typography className={classes.parameterTitles} variant='h6' noWrap>Low/High</Typography>
                        <Typography className={classes.parameterValues} variant='h6' noWrap>{mostRecentQuote["3. low"]} / {mostRecentQuote["2. high"]}</Typography>
                    </Grid>

                    <Grid item className={classes.columnItem2}>
                        <Typography className={classes.parameterTitles} variant='h6' noWrap>Volume</Typography>
                        <Typography className={classes.parameterValues} variant='h6' noWrap>{mostRecentQuote["6. volume"]}</Typography>
                    </Grid>
                </Grid>
            </Grid>            
        </Grid>

        <VisualGraph dailyQuoteValues={dailyQuoteValues} dailyQuoteDates={dailyQuoteDates} />
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