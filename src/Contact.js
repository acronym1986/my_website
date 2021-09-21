import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/icons';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
 


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

  return (
    <div>
    <Card className={classes.root} variant="outlined"   >
    <div className={classes.paper}>
      </div >
       <CardContent >       
        <Typography variant="h5" component="h2" >
        LinkedIn:
        </Typography>
         <br/>
        <Typography variant="body2" component="p">
              <LinkedInIcon/>
              <a href="http://linkedin.com/in/pei-qian-he-1b195021b" target="_blank" rel="noreferrer">
              <Link  className={classes.link} target="_blank" >
              <LinkedInIcon/>
            </Link>
              </a>
        </Typography>
      </CardContent>
    </Card>


    <Card style={{marginTop: "20px"}} className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
        E-MAIL:
        </Typography>
          <br/>
        <Typography variant="body2" component="p">
        <EmailIcon/> acronym1986@gmail.com
           
        </Typography>
      </CardContent>
    </Card>


    <Card style={{marginTop: "20px"}} className={classes.root} variant="outlined">
      <CardContent>       
        <Typography variant="h5" component="h2">
        MOBILE PHONE:
        </Typography>
         <br/>
        <Typography variant="body2" component="p">
           <PhoneIphoneIcon/>(610) 435224612
          <br />
        </Typography>
      </CardContent>
    </Card>


    
    </div>
  );
}
