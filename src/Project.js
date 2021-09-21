import React from "react";
import {
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl 
} from "@material-ui/core";
import { Route, Switch, withRouter} from "react-router-dom";
import Programming from './Programming'
import Graphicdesign from './Graphicdesign'




const Project = props => {
    const { history } = props;
    

  return (
    <div >
         <Box 
           style={{ background: '#eeeeee', boxShadow:"1px 1px"}}
           color = "black"
           position="fixed"
           width = "100%" 
           padding = "28px 0 5px 45px"
           margin = "-45px 0 0 -23px"
           > 
                  <FormControl component="fieldset">
                  <RadioGroup row aria-label="position" name="position" defaultValue="top">
                     
                    <FormControlLabel
                      value= "programming"
                      control={<Radio color="primary"/>}
                      label= "PROGRAMMING"
                      onChange = {() => history.push("/project/programming")}
                    />
                      
                    <FormControlLabel
                      value="graphic design"   
                      control={<Radio color="primary"/>}
                      //label={<Link to='/project/graphicdesign'>PROGRAMMING</Link>}
                      label = "GRAPHIC DESIGN"
                      onChange = {() => history.push("/project/graphicdesign")}
                      
                    />
                    </RadioGroup>
                 </FormControl>
           </Box>
                <Box 
                  paddingTop = "75px"
                  paddingLeft = "20px"
                  >    
                     <Switch>
                       <Route  path="/project/programming" component={Programming}/> 
                       <Route  path='/project/graphicdesign' component={Graphicdesign}/>
                    </Switch>
                </Box>
    </div>
  );
}

export default withRouter(Project);