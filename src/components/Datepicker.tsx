import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core";

const Datepicker: React.FC<DatepickerProps> = ({
    props: {
        useStyles = makeStyles({}),
        fieldKey,
        fieldMandatory,
        fieldPrompt,
        handleChange
    }
}: DatepickerProps): ReactElement => {
    const classes = useStyles();
    return (
        <div className="form--field">
            <label>{fieldPrompt}</label>
            <input type="date" onChange={(e) => handleChange(e, fieldKey, e.target.value)}></input>
        </div>
    )
}

interface DatepickerProps {
    props: {
        useStyles?: any;
        fieldKey: string;
        fieldMandatory: string;
        fieldPrompt: string;
        handleChange: (e: React.ChangeEvent<HTMLInputElement>, id: string, value:any) => void;
    };
}

export default Datepicker