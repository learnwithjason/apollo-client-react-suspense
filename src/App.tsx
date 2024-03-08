import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
  gql,
  useSuspenseQuery,
} from '@apollo/client';
import './App.css';
import { GetAllFilmsDocument } from './App.generated';
import { Suspense, useState, useTransition } from 'react';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://current--pagila-test-api.apollographos.net/graphql',
  }),
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GET_ALL_FILMS_QUERY = gql`
  query GetAllFilms($first: Int, $offset: Int) {
    allFilmsList(first: $first, offset: $offset) {
      id
      description
      rating
      title
    }
  }
`;

const List = () => {
  const [pendingState, startTransition] = useTransition();
  const [page, setPage] = useState(0);

  const { data } = useSuspenseQuery(GetAllFilmsDocument, {
    variables: { first: 10, offset: page },
  });

  return (
    <>
      <ul>
        {data.allFilmsList?.map((film) => (
          <li key={film.title}>
            {film.title} ({film.rating}) — {film.description}
          </li>
        ))}
      </ul>

      <button
        onClick={() => startTransition(() => setPage((curr) => curr + 10))}
        disabled={pendingState}
      >
        {pendingState ? 'loading...' : 'next page'}
      </button>
    </>
  );
};

function App() {
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={<p>loading...</p>}>
        <List />
      </Suspense>
    </ApolloProvider>
  );
}

export default App;
