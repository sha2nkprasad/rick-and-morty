import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import debounce from '../../utils/debounce';

interface Props {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchTerm?: string | number | null;
}

const useSearchBar = ({ searchTerm, handleChange }: Props) => {
    const [searchInput, setSearchInput] = useState(searchTerm);
    const debouncedChange = useMemo(
        () => debounce(handleChange, 500),
        [handleChange]
    );
    const handleChangeEvent = (ev: React.ChangeEvent<HTMLInputElement>) => {
        ev.persist();
        setSearchInput(ev?.target?.value);
        debouncedChange(ev);
    };

    return {
        searchInput,
        handleChangeEvent,
    };
};

export default useSearchBar;
