import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const OfferCreate = (props) => {
  return (
    <Create title='Create a Offer' {...props}>
        <SimpleForm>
            <TextInput source='title' />
            <TextInput multline source='body' />
            <DateInput label='Published' source='publishedAt' />
        </SimpleForm>
    </Create>
  )
}

export default OfferCreate