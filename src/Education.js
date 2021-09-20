import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
 
 


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderLeftColor: '#76ff03',
    borderLeftWidth: 5,
  },
  
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  
});

export default function Education() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div  >
    <Card className={classes.root} variant="outlined" >
    <div className={classes.paper}>
      </div >
       <CardContent >       
        <Typography variant="h5" component="h2" >
        Federation University Australia
        </Typography>
         <hr/>
        <Typography className={classes.pos} color="textSecondary">
           07 / 2015 – 11 / 2016
        </Typography>
        <Typography variant="body2" component="p">
           {bull}Master of Software Engineering
          <br />
        </Typography>
      </CardContent>
    </Card>


    <Card style={{marginTop: "20px"}} className={classes.root} variant="outlined">
      <CardContent>       
        <Typography variant="h5" component="h2">
          University of Technology, Sydney (UTS)
        </Typography>
         <hr/>
        <Typography className={classes.pos} color="textSecondary">
           07 / 2011 – 08 / 2013
        </Typography>
        <Typography variant="body2" component="p">
           {bull}Master of Information Technology (Extended)
          <br />
        </Typography>
      </CardContent>
    </Card>


    <Card style={{marginTop: "20px"}} className={classes.root} variant="outlined">
      <CardContent>       
        <Typography variant="h5" component="h2">
        Guangzhou University, China
        </Typography>
         <hr/>
        <Typography className={classes.pos} color="textSecondary">
           07 / 2005 – 07 / 2009
        </Typography>
        <Typography variant="body2" component="p">
           {bull}Bachelor of Fine Arts
          <br />
        </Typography>
      </CardContent>
    </Card>


    
    </div>
  );
}
