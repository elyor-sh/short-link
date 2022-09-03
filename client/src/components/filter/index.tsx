import React, {useState} from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import {FilterProps} from "./types";
import {Grid, IconButton, Tooltip} from "@mui/material";

import {drawFilter} from "./drawFilter";

interface Props {
    filters: FilterProps[]
    initialState: Object
    handleSearch: (p: any) => void
    handleClear: () => void
}

const Filter: React.FC<Props> = ({filters, initialState, handleSearch, handleClear}) => {

    const [value, setValue] = useState(initialState)

    const handleClearFilter = () => {
        setValue({...initialState})
        handleClear()
    }

    return (
        <Grid container spacing={2} sx={{mb: 2, mt: 2, alignItems: 'center'}}>
            {
                filters.map(filter => (
                    <Grid item key={filter.name}>
                        {drawFilter(filter, value, setValue)}
                    </Grid>
                ))
            }
            {
                filters.length &&
                <Grid item>
                    <Tooltip title='Поиск'>
                        <IconButton onClick={() => handleSearch(value)}>
                            <SearchOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Очистить'>
                        <IconButton onClick={handleClearFilter}>
                            <ClearOutlinedIcon/>
                        </IconButton>
                    </Tooltip>
                </Grid>
            }
        </Grid>
    );
};

export default Filter;