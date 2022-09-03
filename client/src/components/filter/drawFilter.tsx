import {FilterProps} from "./types";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

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
                   sx={{width: filter.width, '& label': {fontSize: '14px'}}}
            />
        case "select":
            return <FormControl fullWidth size="small" sx={{minWidth: 170, '& label': {fontSize: '14px'}}}>
                <InputLabel id="demo-simple-select-label">{filter.label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value[filter.name] || ''}
                    label={filter.label}
                    onChange={(e) => setValue({...value, [filter.name]: e.target.value})}
                >
                    {
                        filter?.options?.map(option => {
                            return (
                                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        default:
            return null
    }
}