import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core";

import Dropdown from "./Dropdown";
import Datepicker from "./Datepicker";
import Input from "./Input";

const Element: React.FC<ElementProps> = ({
    useStyles = makeStyles({}),
    fields: {
        fieldKey,
        fieldPrompt,
        fieldMandatory,
        fieldPlaceholder,
        fieldType,
        fieldValue,
        fieldOptions,
    },
    handleChange,
}): ReactElement => {
    switch (fieldType) {
        case "datepicker":
            return (
                <Datepicker
                    useStyles={useStyles}
                    fieldKey={fieldKey}
                    fieldMandatory={fieldMandatory}
                    fieldPrompt={fieldPrompt}
                    handleChange={handleChange}
                />
            )

        case "dropdown":
            return (
                <Dropdown
                    useStyles={useStyles}
                    fieldKey={fieldKey}
                    fieldMandatory={fieldMandatory}
                    fieldPrompt={fieldPrompt}
                    fieldOptions={fieldOptions}
                    handleChange={handleChange}
                />
            )

        case "input":
            return (
                <Input
                    useStyles={useStyles}
                    fieldKey={fieldKey}
                    fieldMandatory={fieldMandatory}
                    fieldPrompt={fieldPrompt}
                    fieldPlaceholder={fieldPlaceholder}
                    handleChange={handleChange}
                />
            )

        case "radio":
            return (
                <div>
                    radio
                </div>
                // <Dropdown
                //     useStyles={useStyles}
                //     fieldKey={fieldKey}
                //     fieldMandatory={fieldMandatory}
                //     fieldPrompt={fieldPrompt}
                //     fieldOptions={fieldOptions}
                //     handleChange={handleChange}
                // />
            )

        case "textarea":
            return (
                <div>
                    textarea
                </div>
                // <Dropdown
                //     useStyles={useStyles}
                //     fieldKey={fieldKey}
                //     fieldMandatory={fieldMandatory}
                //     fieldPrompt={fieldPrompt}
                //     fieldPlaceholder={fieldPlaceholder}
                //     handleChange={handleChange}
                // />
            )

        default:
            return (
                <div>
                    default
                </div>
                // <Dropdown
                //     useStyles={useStyles}
                //     fieldKey={fieldKey}
                //     fieldMandatory={fieldMandatory}
                //     fieldPrompt={fieldPrompt}
                //     fieldOptions={fieldOptions}
                //     handleChange={handleChange}
                // />
            )
    }
};

interface ElementProps {
    useStyles: any;
    handleChange: (e: React.ChangeEvent, id: string, value: any) => void;
    fields: {
        fieldKey?: string;
        fieldPrompt?: string;
        fieldMandatory?: string;
        fieldPlaceholder?: string;
        fieldType?: string;
        fieldValue?: string;
        fieldOptions?: OptionList[];
    };
}

interface OptionList {
    optionLabel: string;
}

export default Element;
