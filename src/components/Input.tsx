import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core";

const Input: React.FC<InputProps> = ({
    props: {
        useStyles = makeStyles({}),
        fieldKey,
        fieldMandatory,
        fieldPrompt,
        fieldPlaceholder,
        handleChange
    }
}: InputProps): ReactElement => {
    const classes = useStyles();
    return (
        <div className="form--field">
            <label>{fieldPrompt}</label>
            <input type="input" placeholder={fieldPlaceholder} onChange={(e) => handleChange(e, fieldKey, e.target.value)}></input>
        </div>
    )
}

interface InputProps {
    props: {
        useStyles?: any;
        fieldKey: string;
        fieldMandatory: string;
        fieldPrompt: string;
        fieldPlaceholder: string;
        handleChange: (e: React.ChangeEvent<HTMLInputElement>, id: string, value:any) => void;
    };
}

export default Input