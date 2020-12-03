import React from 'react';
import {AppBar, Toolbar, Button, Grid, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
  headerButton: {fontSize: '30px'}
})

export default function Header(props){

  const {setCurSelect} = props
  const classes = useStyles();

    return (
    <AppBar position="static">
        <Grid container justify='space-evenly'>
          <Grid item xs={2}>
          <Button className={classes.headerButton} onClick={()=>{setCurSelect('FB')}}>Facebook</Button>
          </Grid>

          <Grid item xs={2}>
          <Button className={classes.headerButton} onClick={()=>{setCurSelect('AAPL')}}>Apple</Button>
          </Grid>

          <Grid item xs={2}>
          <Button className={classes.headerButton} onClick={()=>{setCurSelect('AMZN')}}>Amazon</Button>
          </Grid>

          <Grid item xs={2}>
          <Button className={classes.headerButton} onClick={()=>{setCurSelect('NFLX')}}>Netflix</Button>
          </Grid>

          <Grid item xs={2}>
          <Button className={classes.headerButton} onClick={()=>{setCurSelect('GOOGL')}}>Google</Button>
          </Grid>
        </Grid>
  </AppBar>
    );
}