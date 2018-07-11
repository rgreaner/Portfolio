import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl@material-ui/core/Button'
import Main from './components/Main';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div style={{height: '300px', position: 'relative'}}>
      <Layout fixedHeader>
          <Header title={<span><span style={{ color: '#ddd' }}></span> <strong><Link to="/">Rachel Greaner</Link></strong></span>}>
              <Navigation>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Rachel Greaner">
              <Navigation>
              <Link to="/aboutme">About Me</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <Main /> 
          </Content>
      </Layout>
  </div>
    )
  }
}

export default App;
