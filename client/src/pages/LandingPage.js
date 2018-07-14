import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import './LandingPage.css';

class Landing extends Component {
    state = {
      spacing: '16',
    };
  
    handleChange = key => (event, value) => {
      this.setState({
        [key]: value,
      });
    };
  
    render () {
        return (
            <main id ="landingPage">
            <Grid container spacing={8}>
                <Grid item md={3} />
                <Grid item md={6} >
                    <div id ="basicIntro">
                        <h1 id="fullName">Rachel Greaner</h1>
                        <h2 id="myTitle">Full Stack Web Developer</h2>
                        <p>Full Stack Web Developer with an emphasis in Back End technologies. Passionate about learning new technologies and problem-solving. Adept at API routing with Express, composing applications with ReactJS, and database handling with SQL/My SQL databases.</p>

                        <h1><a href="./about" id="elipse">{String.fromCharCode(8230)}</a></h1>
                    </div>
                </Grid>
            </Grid>
            </main>
        )
    }
}

export default withRouter(Landing);