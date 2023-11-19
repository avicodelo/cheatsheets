import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Importamos los paquetes necesarios para comenzar las queries
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';

const getAuth = () => {
  const token = localStorage.getItem("user-token")
  return token ? `bearer ${token}` : null
}

//Montamos el cliente con Apollo, es necesario indicar la url de graphql y determinar la cache
const client = new ApolloClient({
  link: new HttpLink({
    headers: {
      authorization: getAuth()
    },
    uri: 'http://localhost:4000/',
  }),
  cache: new InMemoryCache()
});


ReactDOM.createRoot(document.getElementById('root')).render(
  /* Utilizamos el provider de Apollo que envuelva nuestra app completa y le pasamos el "client" */
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
