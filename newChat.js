import React from 'react';
import { FormControl, InputLabel, Input, Button, Paper, withStyles, CssBaseline, Typography } from '@material-ui/core';
import styles from './styles';
const firebase = require("firebase");

class NewChatComponent extends React.Component{
    render(){
        const { classes } = this.props;

        return(<div className={classes.main}>Welcome to new chat Component</div>);
    }
}

export default withStyles(styles)(NewChatComponent);