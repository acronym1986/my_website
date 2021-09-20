import React from "react";
import {
  Drawer,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
//import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
//import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme} from "@material-ui/core/styles";
import { withRouter,Route, Switch } from "react-router-dom";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
import tlogo from "./img/tlogo.png"
import slash from "./img/slash.png"
import ava2 from './img/ava2.png';



const drawerWidth = 240;

const useStyles = makeStyles((theme) =>({
  root: {
    display: 'flex',
  },
  
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar, 
  drawerPaper: {
    width: drawerWidth,
    borderRightColor: "#bdbdbd",
    paddingRight: theme.spacing(0.2),
    //background:"#eeeeee",
  },
  logo: {
    maxWidth: 115,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));



const SideNav = props => {
  const { history } = props;
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  

  const drawer = (
      <div>
        <img src={ava2} alt="logo" style={{maxWidth: "239px", marginTop: "-5px"}}/>
        <div className={classes.toolbar}/>
        
        <Divider style={{ background: 'black', marginTop: "-69px"}} />
        <ListItem button key={"ABOUT"} onClick={() => history.push("/")} >
          <ListItemText primary={"ABOUT"}/>
          <img src={slash} alt="slash" style={{width: "32px", margin:"0 -14px -13px 0"}} />
        </ListItem>
        <Divider style={{ background: '#606060' }} />
         
        <ListItem button  key={"EDUCATION"} onClick={() => history.push("/education")} >
          <ListItemText primary={"EDUCATION"} />
          <img src={slash} alt="slash" style={{width: "32px", margin:"0 -14px -13px 0"}} />
        </ListItem>
        <Divider style={{ background: 'black' }} />
        
        <ListItem button  key={"EXPERIENCE"} onClick={() => history.push("/experience")}>
          <ListItemText primary={"EXPERIENCE"} />
          <img src={slash} alt="slash" style={{width: "32px", margin:"0 -14px -13px 0"}} />
        </ListItem>
        <Divider style={{ background: 'black' }} />

        <ListItem button  key={"PROJECTS"} onClick={() => history.push("/project")}>
          <ListItemText primary={"PROJECTS"} />
          <img src={slash} alt="slash" style={{width: "32px", margin:"0 -14px -13px 0"}} />
        </ListItem>
        <Divider style={{ background: 'black' }} />

        <ListItem button  key={"Contact"} onClick={() => history.push("/contact")}>
          <ListItemText primary={"CONTACT"} />
          <img src={slash} alt="slash" style={{width: "32px", margin:"0 -14px -13px 0"}} />
        </ListItem>
        <Divider style={{ background: 'black' }} />
      </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  
  return (
    <div className={classes.root}>
    

       
      <AppBar style={{ boxShadow:"0 1px"}}
         color = "inherit"
         position="fixed" 
         className={classes.appBar}
         >
        <Toolbar>
          <IconButton
            //style={{ background: '#C0C0C0'}}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <img src={tlogo} alt="logo" className={classes.logo} />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          > 
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content} >
        <div className={classes.toolbar} />
        <Switch>
        <Route exact path="/" render={props => <About {...props} />} />
        <Route exact path="/education" render={props => <Education {...props} />} />
        <Route exact path="/experience" render={props => <Experience {...props} />} />
         <Route  path="/project" render={props => <Project {...props} />} ><Project/></Route>
         <Route exact path="/contact" render={props => <Contact {...props} />} />
      </Switch>
      </main>
      </div>
  );
};

export default withRouter(SideNav);
