import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://nameless-brook-300024.eu-central-1.aws.cloud.dgraph.io/graphql',
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </ApolloProvider>,
    document.getElementById('root')
);


reportWebVitals();
