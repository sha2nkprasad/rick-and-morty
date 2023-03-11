import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCharacterQuery } from '../../generated/graphql';

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
