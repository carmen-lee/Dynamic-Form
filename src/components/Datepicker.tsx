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
        <div>
            <label>{fieldPrompt}</label>
            <input type="date"></input>
        </div>
    )
}

interface DatepickerProps {
    props: {
        useStyles?: any;
        fieldKey: string;
        fieldMandatory: string;
        fieldPrompt: string;
        handleChange: (e: React.ChangeEvent<HTMLSelectElement>, id: string, value:any) => void;
    };
}

interface OptionList {
    optionLabel: string;
}

export default Datepicker