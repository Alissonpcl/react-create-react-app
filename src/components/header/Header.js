import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { LinkWrapper } from "../../utils/LinkWrapper";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: 'white',
        textDecoration: 'none'
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h4"
                            className={classes.title}
                            component={LinkWrapper}
                            activeStyle={{}}
                            to="/">
                    Logo
                </Typography>
                <Button color="inherit"
                        component={LinkWrapper}
                        to="/autores">
                    Autores
                </Button>
                <Button color="inherit"
                        component={LinkWrapper}
                        to="/livros">
                    Livros
                </Button>
                <Button color="inherit"
                        component={LinkWrapper}
                        to="/sobre">
                    Sobre
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
