import React from 'react'
import { Edit, SimpleForm, TextInput, NumberInput, DateInput} from 'react-admin'

const OfferEdit = (props) => {
  return (
    <Edit title='Edit Offer' {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='candidate' label='Name' />
            <TextInput source='title' />
            <NumberInput source='salary' />
            <NumberInput source='bonus' />
            <NumberInput source='equity' />
            <TextInput multiline source='culture' />
            <TextInput multiline source='opportunities' />
            <DateInput label='Published' source='publishedOn' />
        </SimpleForm>
    </Edit>
  )
}

export default OfferEdit