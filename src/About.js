import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Box } from '@material-ui/core';
import mePic2 from './img/mePic2.jpg';


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
  avatar: {
    backgroundColor: red[500],
  },
  logo: {
    maxWidth: 115,
  },
  
});

export default function Education() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
    <Card className={classes.root} variant="outlined">
         
         <Box display="flex" flexDirection="row" p={1} m={1}>
            <Box p={1} >
              <Typography variant="h5" component="h2" >
              ABOUT MYSELF
              </Typography>
                <hr />
              <Typography variant="body2" component="p">
              Motivated and hardworking Graduate from Information Technology area in Federation University.<br/> 
                Enthusiastic about web design, application development, graphic desige and video editing. 
                Seeking an internship/junior developer position to utilize and improve my IT skills and knowledge.<br/> <br/> 
                Combining my previous experience of customer service with my skills to develop effective user friendly applications.  
                Successful in prioritizing tasks, solving problems and a loyal team player,  
                looking forward to learning from an organisation that provides the opportunity to expand my knowledge and skills.
                <br />
                </Typography>
            </Box>    

            <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
                <Box 
                p={1} 
                component="img" 
                src={mePic2} 
                borderRadius="50%" 
                width="120px" 
                height="120px"
                />
             </Box>
        </Box> 
    </Card>
           

    <Card style={{marginTop: "20px"}} className={classes.root} variant="outlined">
      <CardContent>       
        <Typography variant="h5" component="h2">
          HARD SKILL
        </Typography>
         <hr/>
        <Typography variant="body2" component="p">
           {bull}Programming:HTML, CSS, JavaScript, React, Redux, Ruby on Rails, SQLite<br/>
           {bull}Graphic and Video design: Adobe Premiere, CorelDraw<br/>
           {bull}Microsoft Word, PowerPoint, Slack<br/>
          <br />
        </Typography>
      </CardContent>
    </Card>

       
    <Card style={{marginTop: "20px"}} className={classes.root} variant="outlined">
      <CardContent>       
        <Typography variant="h5" component="h2">
          SOFT SKILL
        </Typography>
         <hr/>
        <Typography variant="body2" component="p">
           {bull}Teamwork<br />
           {bull}Communication<br />
           {bull}Organization<br />
           {bull}Reporting<br />
          <br />
        </Typography>
      </CardContent>
    </Card>
    
    </div>
  );
}
