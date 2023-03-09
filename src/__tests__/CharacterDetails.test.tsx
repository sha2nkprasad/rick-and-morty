import * as React from 'react'
import { MockedProvider } from "@apollo/client/testing";
import '@testing-library/jest-dom'
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import CharacterDetails from '../pages/CharacterDetails';
import { gql } from '@apollo/client';


const mocks: any = [
  {
    request: {
      query: gql`
      query loadCharacter($id: ID!) {
          character(id: $id) {
              ...CharacterDetails
          }
      }
  `,
      variables: {
        id: '1'
      }
    },
    result: {
      data: {
        character: {
          id: "1",
          name: "random",
          status: 'alive',
          species: 'human',
          type: 'type',
          gender: 'Male',
          origin: {
            id: '1',
            name: 'earth',
            type: 'planet',
            dimension: 'dim',
            created:'2017-11-10T12:42:04.162Z',
            __typename: 'Character',
          },
          location: {
            id: '1',
            name: 'earth',
            type: 'planet',
            dimension: 'dim',
            created:'2017-11-10T12:42:04.162Z',
            __typename: 'Character',
          },
          image: 'tempURL',
          episode: {
            id: '12',
            name: 'Pilot',
            air_date: 'December 2, 2013',
            episode: 'S01E01',
            created: '2015-11-10T12:42:04.162Z',
            __typename: 'Character',
          },
          created: '2013-11-10T12:42:04.162Z',
          __typename: 'Character',
        }
      }
    }
  }
];

it("renders without error", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CharacterDetails />
    </MockedProvider>
  );
  expect(await screen.getByRole('progressbar', { hidden: true })).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.getByRole('progressbar', { hidden: true }));
});