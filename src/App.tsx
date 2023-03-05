import './App.css'
import CharacterList from './components/CharacterList'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import client from './core/apolloClient';

const testData = () =>{
  client
  .query({
    query: gql`
      query getCharacters {
        characters {
          info {
            count
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));
}

console.log('-----------', testData());

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <CharacterList />
      </div>
    </ApolloProvider>
  )
}

export default App
