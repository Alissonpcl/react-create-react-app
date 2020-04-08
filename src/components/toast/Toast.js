import React from "react";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import Typography from "@material-ui/core/Typography";

export default ({open, handleClose, severity, children}) => (
    <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}>
        <Alert
            severity={severity}
            variant={"filled"}
            onClose={handleClose}>
            <Typography
            style={{whiteSpace: 'pre-line'}}>
                {children}
            </Typography>
        </Alert>
    </Snackbar>
);
