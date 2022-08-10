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
        <div className="form--field">
            <label>{fieldPrompt}</label>
            <div>
                {fieldOptions && fieldOptions.map((option, i) => (
                    <div key={i}>
                        <input
                            type="radio"
                            name={fieldKey}
                            value={option.optionLabel}
                            onChange={(e) => handleChange(e, fieldKey, e.target.value)}
                        />
                        <label>{option.optionLabel}</label>
                    </div>
                ))}
            </div>
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
        handleChange: (e: React.ChangeEvent<HTMLInputElement>, id: string, value:any) => void;
    };
}

interface OptionList {
    optionLabel: string;
}

export default Radio