import React, {Fragment} from "react";
import Header from '../../components/header/Header';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useEstilos = makeStyles({
    titulo: {
        textAlign: 'center',
        color: 'blue',
    }
});

const Sobre = () => {
    const classes = useEstilos();
    return (
        <Fragment>
            <Header />
            <Container
                maxWidth={"sm"}>
                <Typography
                    className={classes.titulo}
                    variant={"h1"}
                    component={"h2"}
                >
                    Sobre
                </Typography>
                <Typography
                    variant={"body1"}
                    component={"p"}>
                    Projeto foi para aprendizado da tecnologia React.
                </Typography>
            </Container>
        </Fragment>
    );
};

export default Sobre;
