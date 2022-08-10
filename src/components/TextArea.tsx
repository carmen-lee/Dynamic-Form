import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core";

const TextArea: React.FC<TextAreaProps> = ({
    props: {
        useStyles = makeStyles({}),
        fieldKey,
        fieldMandatory,
        fieldPrompt,
        fieldPlaceholder,
        handleChange
    }
}: TextAreaProps): ReactElement => {
    const classes = useStyles();
    return (
        <div>
            <label>{fieldPrompt}</label>
            <textarea placeholder={fieldPlaceholder}></textarea>
        </div>
    )
}

interface TextAreaProps {
    props: {
        useStyles?: any;
        fieldKey: string;
        fieldMandatory: string;
        fieldPrompt: string;
        fieldPlaceholder: string;
        handleChange: (e: React.ChangeEvent<HTMLSelectElement>, id: string, value:any) => void;
    };
}

interface OptionList {
    optionLabel: string;
}

export default TextArea