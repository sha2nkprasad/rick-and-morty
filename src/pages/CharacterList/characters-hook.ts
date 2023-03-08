import * as React from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import { useGetCharactersQuery } from '../../generated/graphql';
import usePagination from '../../utils/usePagination';

const useCharacters = () => {
    const pagination = usePagination();
    const [name, setName] = useQueryParam('name', StringParam);
    const [status, setStatus] = useQueryParam('status', StringParam);
    const [species, setSpecies] = useQueryParam('species', StringParam);
    const [type, setType] = useQueryParam('type', StringParam);
    const [gender, setGender] = useQueryParam('gender', StringParam);

    const { data, loading } = useGetCharactersQuery({
        fetchPolicy: 'network-only',
        variables: {
            page: pagination.page,
            name: name,
            status: status,
            species: species,
            type: type,
            gender: gender,
        },
    });

    const characters = data?.characters?.results ?? [];
    const metadata = data?.characters?.info;

    const handlePageChange = (
        _: React.ChangeEvent<unknown>,
        value: React.SetStateAction<number>
    ) => {
        pagination.setPage(value as number);
    };

    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        pagination.setPage(1);
        if (event.target.value === '') {
            setName('');
        } else {
            setName(event.target.value);
        }
    };

    return {
        page: pagination.page,
        pageCount: metadata?.pages || 0,
        name,
        status,
        species,
        type,
        gender,
        characters,
        metadata,
        loading,
        handlePageChange,
        onSearch,
    };
};

export default useCharacters;
