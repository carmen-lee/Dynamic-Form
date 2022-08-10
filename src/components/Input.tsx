import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core";

const Input: React.FC<InputProps> = ({
    useStyles = makeStyles({}),
    fieldKey,
    fieldMandatory,
    fieldPrompt,
    fieldPlaceholder,
    handleChange
}: InputProps): ReactElement => {
    const classes = useStyles();
    return (
        <div>
            <label>{fieldPrompt}</label>
            <input type="input" placeholder={fieldPlaceholder}></input>
        </div>
    )
}

interface InputProps {
    useStyles?: any;
    fieldKey: string;
    fieldMandatory: string;
    fieldPrompt: string;
    fieldPlaceholder: string;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>, id: string, value:any) => void;
}

interface OptionList {
    optionLabel: string;
}

export default Input