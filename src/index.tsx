import React from 'react';
import './index.css';
import App from './Form';
import { createRoot } from 'react-dom/client';
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

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App props={{useStyles}} />);
