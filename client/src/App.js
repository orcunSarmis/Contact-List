import React from 'react';
import './App.css';
import { Routes,  Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ContacList from './components/contacts/ContactList/ContactList';
import AddContact from './components/contacts/AddContact/AddContacts';
import ViewContact from './components/contacts/ViewContact/ViewContact';
import EditContact from './components/contacts/EditContact/EditContact';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

function App ()  {
  return (
    <React.Fragment>
      <ApolloProvider client={client}>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/> }/>
        <Route path={'/contacts/list'} element={<ContacList/>} />
        <Route path={'/contacts/add'} element={<AddContact/>} />
        <Route path={'/contacts/view/:contactId'} element={<ViewContact/>} />
        <Route path={'/contacts/edit/:contactId'} element={<EditContact/>} />
      </Routes>
      </ApolloProvider>
    </React.Fragment>
  );
}

export default App;
