import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import OfferList from './components/OfferList'
import OfferCreate from './components/OfferCreate'
import OfferEdit from './components/OfferEdit'
import OfferShow from './components/OfferShow'

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name='offers'
        list={OfferList}
        create={OfferCreate}
        edit={OfferEdit}
        show={OfferShow}
      />
    </Admin>
  )
}

export default App
