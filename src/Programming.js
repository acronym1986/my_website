import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import searchWordJs from './img/searchWordJs.png';
import covidTrackerReact from './img/covidTrackerReact.png';
import rubyCLI from './img/rubyCLI.png';
import farmTaskRails from './img/farmTaskRails.png';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper1: {
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius:0,
     
  },
  paper2: {
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius:0
  },
  card:{
    maxWidth: "100%",
    borderRadius:0,
  },

  media: {
    height: "100%",
  },
}));

export default function Programming() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5} >
        <Grid item xs={12} sm={5}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              src={searchWordJs}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Search Word Application
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                This project was built by JavaScript/JSON/DOM/CSS, API was provided
                by Merriam-Webster, users are able to enter word and receive word's 
                definition and pronunciation
                <br/><br/>
                <a href="https://acronym1986.github.io/js-project-mode/" target="_blank" rel="noreferrer">
                GitHub Link
                </a>
              </Typography>
            </CardContent>
        </Card>
    </Grid>  


    <Grid item xs={12} sm={5}>
        <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              src={covidTrackerReact}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Covid Tracker Application
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                React.js, CSS, JSON are used in this project, users can search 
                covid cases to get various results in different countries. Users 
                can also check the vaccination situtions in different countries
                <br/><br/>
                <a href="https://acronym1986.github.io/project2-react-app/" target="_blank" rel="noreferrer">
                GitHub Link
                </a>
              </Typography>
            </CardContent>
        </Card>
    </Grid>   
  </Grid>

  

  <Grid container spacing={5} >
        <Grid item xs={12} sm={5}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              src={rubyCLI}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
               Covid Test Center CLI
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                This is a Ruby Gem package by using Scraping and Nokogiri, users 
                are able to see prompt message and follow the guidelines in order 
                to see the covid test centers in Adelaide, SA  
                <br/><br/>
                GitHub Link
              </Typography>
            </CardContent>
        </Card>
    </Grid>  


    <Grid item xs={12} sm={5}>
        <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              src={farmTaskRails}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Farm Task Application
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                This project was used Ruby on Rails and SQLite. Users are able 
                to simply sign up and log in, creating mutliple accounts and creating 
                different farm tasks to manage farm 
                <br/><br/>
                GitHub Link
              </Typography>
            </CardContent>
        </Card>
    </Grid>
        
  </Grid>
    </div>
  );
}













