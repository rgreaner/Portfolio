import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import './About.css';


class About extends Component {
        state = {
          spacing: '16',
        };
      
        handleChange = key => (event, value) => {
          this.setState({
            [key]: value,
          });
        };
      
        render() {
         
        return (
        <main id ="aboutPage">
            <Grid container spacing={8}>
                <Grid item md={3} />
                <Grid item md={6} id ="intro" >
           
                <h1 id="topTitle"> {String.fromCharCode(60) + " "+"About" + " "+ String.fromCharCode(62)} </h1>
                <hr id="title" />
                <img id="aboutPic" src={require("../images/aboutPic.jpg")} alt="Rachel" />
                <p>Hello and welcome to my portfolio!  I am a full stack developer with a focus in MySQL, API construction, and Javascript.  I graduated from the University of Minnesota's Continuing & Professional Studies college in May 2018 and am currently seeking employment within the Twin Cities Metro.
                <br />
                <br />
                Before attending the first full time coding "bootcamp" at the University of Minnesota, I attended St. Olaf College where I received a major in both English and Japanese, with an emphasis in Asian Studies, in May 2017.  My sister introduced me to the idea of Web Development the following fall and I began to self-study on Khan Academy and Code Academy.  I enjoyed these online courses immensely, so I decided to attend a bootcamp and began work within the technological industry as soon as possible.
                <br />
                <br />
                

                </p>
                </Grid>
                <Grid item md={2}>
                <img src={require("../images/github.png")} id="github" alt="Github"/>
                <br />
                <img src={require("../images/linkedin.png")} id="linked" alt="LinkedIn"/>
                </Grid>
            </Grid>
            
        </main>
        )
    }
}

export default withRouter(About);