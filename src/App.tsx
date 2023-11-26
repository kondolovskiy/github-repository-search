import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './features/Search';
import Favorites from './features/Favorites';
import { Navigation } from './components/Navigation';
import { Layout } from './components/Layout';

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Layout>
          <Navigation />
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Layout>
      </Router>
    </ApolloProvider>
  );
}

export default App;
