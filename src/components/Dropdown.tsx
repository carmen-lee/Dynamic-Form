import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core";

const Dropdown: React.FC<DropdownProps> = ({
    props: {
        useStyles = makeStyles({}),
        fieldKey,
        fieldMandatory,
        fieldPrompt,
        fieldOptions,
        handleChange
    }
}: DropdownProps): ReactElement => {
    const classes = useStyles();
    return (
        <div className="form--field">
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

interface DropdownProps {
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

export default Dropdown