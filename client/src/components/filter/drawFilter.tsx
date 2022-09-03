import {FilterProps} from "./types";
import {TextField} from "@mui/material";

export function drawFilter (
    filter: FilterProps,
    value: any,
    setValue: (p: any) => void
) {

    switch (filter.type) {
        case "input":
            return <TextField
                   value={value[filter.name] || ''}
                   onChange={(e) => setValue({...value, [filter.name]: e.target.value})}
                   name={filter.name}
                   type={filter.inputType || 'text'}
                   label={filter.label}
                   size='small'
            />
        default:
            return null
    }
}