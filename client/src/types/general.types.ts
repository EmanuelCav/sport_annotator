import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

import { ICategory } from "@/interface/dashboard";

export type InputFormPropsType = {
    autoFocus: boolean; 
    text: string; 
    type: HTMLInputTypeAttribute; 
    max: number; 
    autoComplete: HTMLInputAutoCompleteAttribute;
    register: UseFormRegister<any>;
    errors: FieldError;
    value?: string;
}

export type SelectFormPropsType = { 
    register: UseFormRegister<any>;
    errors: FieldError;
    data: ICategory[];
}

export type SurePropsType = {
    text: string;
    action: () => void;
    handleRemove: () => void;
}