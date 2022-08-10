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
        <div className="form--field">
            <label>{fieldPrompt}</label>
            <textarea placeholder={fieldPlaceholder} onChange={(e) => handleChange(e, fieldKey, e.target.value)}></textarea>
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
        handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>, id: string, value:any) => void;
    };
}

export default TextArea