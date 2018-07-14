import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import './AppBar.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);


    return (
      <div className={classes.root}>
        <AppBar position="static"  id= "appBar">
          <Toolbar>

            <IconButton className={classes.menuButton} onClick={this.handleMenu} aria-label="Menu">
            
              <MenuIcon />
            </IconButton>
            <Typography variant="title" className={classes.flex}><a id ="myName" href="/">
            {String.fromCharCode(123)+ " "+"Rachel"+String.fromCharCode(183) + "Greaner"+" "+String.fromCharCode(125)}</a>
          </Typography>
            <Button><a id="clickIt" href='/about'>About</a></Button>
            <Button><a id="clickIt" href='/projects'>Projects </a></Button>
            <Button><a id="clickIt" href='/resume'>Resume </a></Button>
            <Button><a id="clickIt" href='/contact'>Contact </a> </Button>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}> <a id="clickIt" href='/about'> About </a> </MenuItem>
              <MenuItem onClick={this.handleClose}> <a id="clickIt" href='/projects'> Projects</a> </MenuItem>
              <MenuItem onClick={this.handleClose}> <a id="clickIt" href='/resume'> Resume</a> </MenuItem>
              <MenuItem onClick={this.handleClose}> <a id="clickIt" href='/contact'> Contact</a> </MenuItem>
            </Menu>
            </div>
            )}
          </Toolbar>
        </AppBar>
      </div>

    );
  }
}


  MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(MenuAppBar);