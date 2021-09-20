import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import mePic2 from './img/mePic2.jpg'

const useStyles = makeStyles ({
  root: {
    display: 'flex',
    borderRadius:0,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 265,
  },
 
});

export default function About() {
  const classes = useStyles();
   

  return (
    <Card className={classes.root} >
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            ABOUT MESELF
          </Typography>
          <hr/>
          <Typography variant="subtitle1" color="textPrimary">
          Motivated and hardworking Graduate from Information Technology area in Federation University.<br/> 
           Enthusiastic about web design, application development, graphic desige and video editing.<br/> 
           Seeking an internship/junior developer position to utilize and improve my IT skills and knowledge.<br/> <br/> 
           Combining my previous experience of customer service with my skills to develop effective user friendly applications.  
           Successful in prioritizing tasks, solving problems and a loyal team player, 
           looking forward to learning from an organisation that provides the opportunity to expand my knowledge and skills.
          </Typography>
        </CardContent>
         
      </div>
      <CardMedia
        className={classes.cover}
        component="img"
        src={mePic2}
      />
    </Card>
  );
}
