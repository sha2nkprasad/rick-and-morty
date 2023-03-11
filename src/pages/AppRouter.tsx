import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import CharacterDetails from './CharacterDetails';
import CharacterList from './CharacterList';

const AppRouter = () => {
    return (
        <Router>
            <QueryParamProvider adapter={ReactRouter6Adapter}>
                <Routes>
                    <Route path="/" element={<CharacterList />} />
                    <Route
                        path="/characters/:id"
                        element={<CharacterDetails />}
                    />
                </Routes>
            </QueryParamProvider>
        </Router>
    );
};

export default AppRouter;
