import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core";

import Dropdown from "./Dropdown";
import Datepicker from "./Datepicker";
import Input from "./Input";
import Radio from "./Radio";
import TextArea from "./TextArea";

const Element: React.FC<ElementProps> = ({
    useStyles = makeStyles({}),
    fields,
    handleChange,
}: ElementProps): ReactElement => {

    const componentProps = {
        fieldKey: fields.fieldKey,
        fieldPrompt: fields.fieldPrompt,
        fieldMandatory: fields.fieldMandatory,
        fieldPlaceholder: fields.fieldPlaceholder,
        fieldType: fields.fieldType,
        fieldValue: fields.fieldValue,
        fieldOptions: fields.fieldOptions,
        useStyles: useStyles,
        handleChange: handleChange,
    }

    switch (fields.fieldType) {
        case "datepicker":
            return (
                <Datepicker props={componentProps}/>
            )

        case "dropdown":
            return (
                <Dropdown props={componentProps}/>
            )

        case "input":
            return (
                <Input props={componentProps}/>
            )

        case "radio":
            return (
                <Radio props={componentProps}/>
            )

        case "textarea":
            return (
                <TextArea props={componentProps}/>
            )

        default:
            return (
                <></>
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
