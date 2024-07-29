import { ICategory } from "@/interface/dashboard";
import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export type InputFormPropsType = {
    autoFocus: boolean; 
    text: string; 
    type: HTMLInputTypeAttribute; 
    max: number; 
    autoComplete: HTMLInputAutoCompleteAttribute;
    register: UseFormRegister<any>;
    errors: FieldError;
}

export type SelectFormPropsType = { 
    register: UseFormRegister<any>;
    errors: FieldError;
    data: ICategory[];
}