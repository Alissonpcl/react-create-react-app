import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";

export default ({children}) => (
    <Grid container spacing={3}>
        <Grid item sm={12}>
            <Typography
                align={"center"}
                variant={"h3"}>
                {children}
            </Typography>
        </Grid>
    </Grid>
)
