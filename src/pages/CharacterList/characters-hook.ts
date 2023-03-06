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
            page: 1,
            name: name,
            status: status,
            species: species,
            type: type,
            gender: gender
        }
    });

    const characters = data?.characters?.results;
    const metadata = data?.characters?.info;

    return {
        pagination,
        name,
        status,
        species,
        type,
        gender,
        characters,
        metadata,
        loading,
    };
};

export default useCharacters;