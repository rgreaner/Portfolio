import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import './Projects.css';


class Projects extends Component {
render () {
  return (
      <main id="projectsMain">
          <Grid container spacing={8}>
              <Grid item md={3} />
      <Grid item md={3}>
      <div id="plantyPlant">
          <Card>
           <CardContent>
                <img id="plantPic" src={require("../images/plants.jpg")} />
                <h1>Plant Tracker</h1>
                <p id= "informationTime" >A full-stack project utilizing React, MySQL, and JavaScript to effectively track a user's indoor and outdoor plants.
                    <br />
                    <br />
                    <a target="_blank" href="https://plant-tracker-app.herokuapp.com"> <img id="favIt" src={require("../images/heart-solid.svg")} /> </a>
                    <a target="_blank" href="https://github.com/casmith205/Plant-Tracker"><img id="giddyGit" src={require("../images/github.png")} /> </a>
                </p>
            </CardContent>
        </Card>
        </div>
      </Grid>
      </Grid>
      </main>

  );
}
}

export default withRouter(Projects);