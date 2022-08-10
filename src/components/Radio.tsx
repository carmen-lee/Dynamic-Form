import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core";

const Radio: React.FC<RadioProps> = ({
    props: {
        useStyles = makeStyles({}),
        fieldKey,
        fieldMandatory,
        fieldPrompt,
        fieldOptions,
        handleChange
    }
}: RadioProps): ReactElement => {
    const classes = useStyles();
    return (
        <div>
            <label>{fieldPrompt}</label>
            <select
                onChange={(e) => handleChange(e, fieldKey, e.target.value)}
            >
                {fieldOptions && fieldOptions.map((option:any, i: number) =>
                    <option key={i} value={option.optionLabel}>{option.optionLabel}</option>
                )}
            </select>
        </div>
    )
}

interface RadioProps {
    props: {
        useStyles?: any;
        fieldKey: string;
        fieldMandatory: string;
        fieldPrompt: string;
        fieldOptions: OptionList[];
        handleChange: (e: React.ChangeEvent<HTMLSelectElement>, id: string, value:any) => void;
    };
}

interface OptionList {
    optionLabel: string;
}

export default Radio