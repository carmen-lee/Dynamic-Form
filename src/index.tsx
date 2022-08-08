import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Form';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    formContainer: {
        border: "1px solid gray",
        height: "auto",
        width: "800px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "20px"

    }
})

ReactDOM.render(<App props={{useStyles}}/>, document.getElementById('root'));

