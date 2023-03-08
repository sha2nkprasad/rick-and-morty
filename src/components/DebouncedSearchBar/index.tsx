import * as React from 'react';
import { Box, TextField } from '@material-ui/core';
import useSearchBar from './searchBar-hook';

interface Props {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchTerm?: string | number | null;
    mt?: number;
    mb?: number;
    disabled?: boolean;
}

const DebouncedSearchBar = ({
    handleChange,
    searchTerm,
    mt = 2,
    mb = 2,
    disabled = false,
}: Props) => {
    const { searchInput, handleChangeEvent } = useSearchBar({
        handleChange,
        searchTerm,
    });
    return (
        <Box mt={mt} mb={mb}>
            <TextField
                id="standard-search"
                label="Search Character"
                type="search"
                variant="standard"
                value={searchInput || ''}
                onChange={handleChangeEvent}
                disabled={disabled}
            />
        </Box>
    );
};

export default DebouncedSearchBar;
