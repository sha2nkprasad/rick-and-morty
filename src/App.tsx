import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import client from './core/apolloClient';
import AppRouter from './pages/AppRouter';
import CCSTheme from './variables/theme';

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <ThemeProvider theme={createTheme(CCSTheme)}>
                    <AppRouter />
                </ThemeProvider>
            </div>
        </ApolloProvider>
    );
}

export default App;
