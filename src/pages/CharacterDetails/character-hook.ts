import * as React from 'react';
import { useParams } from 'react-router-dom';
import { StringParam, useQueryParam } from 'use-query-params';
import {
    useGetCharacterQuery,
    useGetCharactersQuery,
} from '../../generated/graphql';
import usePagination from '../../utils/usePagination';

// interface RouteProp {
//     id: string
// }

const useCharacter = () => {
    const { id } = useParams<string>();

    const { data, loading } = useGetCharacterQuery({
        fetchPolicy: 'network-only',
        variables: {
            id: id || '',
        },
    });

    const character = data?.character;

    return {
        character,
        loading,
    };
};

export default useCharacter;
