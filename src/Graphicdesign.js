import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import frame2 from './img/frame2.png';
import noodleapp from './img/noodleapp.png';
import movieuni from './img/moiveuni.png';
import game from './img/game.png';
import studioLogo from './img/studioLogo.png';
import dogapp from './img/dogapp.png';
import material from './img/material.png';
import ink1 from './img/ink1.jpg'
import hover from './img/hover.jpg';
import middle from './img/middle.jpg';
import bottom from './img/bottom.jpg';

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
    textAlign: 'start',
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

export default function Graphicdesign() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} >
       
        <Grid item xs={12} sm={3}>
        <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              src={frame2}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
              Palette for UI 
              </Typography>
            </CardContent>
        </Card>
        </Grid>

        <Grid item xs={12} sm={3}>
        <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              src={noodleapp}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Noodle Order App
              </Typography>
            </CardContent>
        </Card>
        </Grid>
        
        <Grid item xs={12} sm={3}>
           <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              src={movieuni}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Moive Club
              </Typography>
            </CardContent>
        </Card>
        </Grid>
           
        <Grid item xs={12} sm={3}>
        <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              src={game}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Game Interface
              </Typography>
            </CardContent>
        </Card>
        </Grid>
               

        <Grid item xs={12} sm={3}>
        <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              src={studioLogo}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Media Studio
              </Typography>
            </CardContent>
        </Card>
        </Grid>

        <Grid item xs={12} sm={3}>
        <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              src={dogapp}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Drop Pet App
              </Typography>
            </CardContent>
        </Card>
        </Grid>

            
        <Grid item xs={12} sm={3}>
        <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              src={material}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Material Design
              </Typography>
            </CardContent>
        </Card>
        </Grid>

           
        <Grid item xs={12} sm={3}>
        <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              src={ink1}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Package Design
              </Typography>
            </CardContent>
        </Card>
        </Grid>

           
        <Grid item xs={12} sm={3}>
        <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              src={hover}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Poster Top
              </Typography>
            </CardContent>
        </Card>
        </Grid>


        <Grid item xs={12} sm={3}>
        <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              src={middle}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Poster Middle
              </Typography>
            </CardContent>
        </Card>
        </Grid>
           
            
        <Grid item xs={12} sm={3}>
        <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              src={bottom}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Poster Bottom
              </Typography>
            </CardContent>
        </Card>
        </Grid>
      </Grid>
    </div>
  );
}