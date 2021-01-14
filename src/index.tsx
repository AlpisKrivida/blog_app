import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css'
import '@quasar/extras/ionicons-v5/index'
import '@quasar/extras/ionicons-v4'

import {ApolloProvider, NormalizedCacheObject, createHttpLink, ApolloClient, HttpLink, InMemoryCache} from '@apollo/client'


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({uri:'http://localhost:4000/graphql'})
})

// const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
//   cache: new InMemoryCache(),
//   uri: 'http://localhost:4000/graphql'
// });

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
