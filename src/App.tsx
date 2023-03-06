import './App.css'
import CharacterList from './pages/CharacterList'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import client from './core/apolloClient';
import AppRouter from './pages/AppRouter';

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <AppRouter />
      </div>
    </ApolloProvider>
  )
}

export default App
