import React from 'react'
import { 
  Show, 
  SimpleShowLayout, 
  TextField, 
  NumberField, 
  DateField, 
  RichTextField } 
  from 'react-admin'

const OfferShow = (props) => {
  return (
    <Show title='Show Offer' {...props}>
        <SimpleShowLayout>
            <TextField source='candidate' label='Name' />
            <TextField source='title' />
            <NumberField source='salary' options={{ style: 'currency', currency: 'USD' }} />
            <NumberField source='bonus' options={{ style: 'currency', currency: 'USD' }} />
            <NumberField source='equity' />
            <RichTextField multline source='culture' />
            <RichTextField multline source='opportunities' />
            <DateField label='Published' source='publishedOn' />
        </SimpleShowLayout>
    </Show>
  )
}

export default OfferShow