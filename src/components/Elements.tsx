import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core";

import Dropdown from "./Dropdown";

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
                <div>
                    datepicker
                </div> 
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
                <div>
                    input
                </div>
            )

        case "radio":
            return (
                <div>
                    radio
                </div>
            )

        case "textarea":
            return (
                <div>
                    textarea
                </div>
            )

        default:
            return (
                <div>
                    default
                </div>
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
