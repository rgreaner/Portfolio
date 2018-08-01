import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import './Projects.css';


class Projects extends Component {
    render() {
        return (
            <main id="projectsMain">
                <Grid container spacing={8}>
                {/* -----------------------------------------------Row 1----------------------------- */}
                    <Grid item md={3} />
                    <Grid item md={3}>
                        <div id="plantyPlant">
                            <Card>
                                <CardContent>
                                    <img id="plantPic" src={require("../images/plants.jpg")} />
                                    <h1>Plant Tracker</h1>
                                    <p id="informationTime" >A full-stack project utilizing React, MySQL, and JavaScript to effectively track a user's indoor and outdoor plants.
                                        <br />
                                        <br />
                                        <a target="_blank" href="https://plant-tracker-app.herokuapp.com"> <img id="favIt" src={require("../images/home.svg")} /> </a>
                                        <a target="_blank" href="https://github.com/casmith205/Plant-Tracker"><img id="giddyGit" src={require("../images/github.png")} /> </a>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>


                  <Grid item md={3}>
                        <div id="emerald">
                            <Card>
                                <CardContent>
                                <div id="fixIt"><img id="gemPic" src={require("../images/emerald.png")} /> </div>
                                    <h1>Emerald</h1>
                                    <p id="informationTime" >Emerald is a finance budgeting app that uses multiple models within the SQL database.
                                        <br />
                                        <br />
                                        <br />
                                        <a target="_blank" href="https://fathomless-shore-99524.herokuapp.com/"> <img id="favIt" src={require("../images/home.svg")} /> </a>
                                        <a target="_blank" href="https://github.com/mjplein/finance_app"><img id="giddyGit" src={require("../images/github.png")} /> </a>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                {/* -----------------------------------------------Row 2----------------------------- */}
                <Grid container spacing={8}>
                <Grid item md={3} />
                
                    <Grid item md={3}>
                        <div id="liri">
                            <Card>
                                <CardContent>
                                    <div id="liriFix"><img id="liriPic" src={require("../images/liri.PNG")} /></div>
                                    <h1 id="liriTitle">Liri: 'Siri' for coders</h1>
                                    <p id="informationTime" >A command line node app that logs information from Twitter, Spotify, and OMDB.
                                        <br />
                                        <br />
                                        <a target="_blank" href="https://drive.google.com/open?id=1BMOFMA6gujKxBQVbC4n96HUNZrWzLSSw"> <img id="favIt" src={require("../images/home.svg")} /> </a>
                                        <a target="_blank" href="https://github.com/rgreaner/LiriApp"><img id="giddyGit" src={require("../images/github.png")} /> </a>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item md={3}>
                        <div id="bamazon">
                            <Card>
                                <CardContent>
                                    <div id="bamazonFix"><img id="bamazonPic" src={require("../images/bamazon.PNG")} /></div>
                                    <h1>Bamazon</h1>
                                    <p id="informationTime" >A command line app that prompts users to input information and subsequently updates the database based on user purchases and interactions.
                                        <br />
                                        <br />
                                        <a target="_blank" href="https://drive.google.com/open?id=1cA_Y-7gMq48Yc1B_DJ9LUA-dubE3lNAJ"> <img id="favIt" src={require("../images/home.svg")} /> </a>
                                        <a target="_blank" href="https://github.com/rgreaner/Bamazon "><img id="giddyGit" src={require("../images/github.png")} /> </a>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        </Grid>
                        </Grid>
                </Grid>
            </main>

        );
    }
}

export default withRouter(Projects);