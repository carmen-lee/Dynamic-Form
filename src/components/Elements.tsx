import React, { ReactElement } from "react";

const Element: React.FC<ElementProps> = ({
    // useStyles = makeStyles({}),
    fields: {
        fieldKey,
        fieldPrompt,
        fieldMandatory,
        fieldPlaceholder,
        fieldType,
        fieldValue,
        fieldOption,
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
                <div>
                    dropdown
                </div>
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
    handleChange: (e: React.ChangeEvent, id: string, value: any) => void;
    fields: {
        fieldKey?: string;
        fieldPrompt?: string;
        fieldMandatory?: string;
        fieldPlaceholder?: string;
        fieldType?: string;
        fieldValue?: string;
        fieldOption?: OptionList[];
    };
}

interface OptionList {
    optionLabel?: string;
}

export default Element;
