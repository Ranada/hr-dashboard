import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  ChipField,
  DateField,
  ShowButton,
  EditButton,
  Button,
  DeleteButton,
} from 'react-admin'

const OfferList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='title' />
        <TextField source='candidate' />
        <NumberField source='salary' options={{ style: 'currency', currency: 'USD' }} />
        <ChipField source='offerStatus' />
        <DateField source='publishedOn'/>
        <ShowButton basePath='/offers' />
        <EditButton basePath='/offers' />
        <Button button label='Copy Link' onClick={() => {navigator.clipboard.writeText(`http://localhost:3000/#/offers/id`)}} />
        <DeleteButton basePath='/offers' />
      </Datagrid>
    </List>
  )
}

export default OfferList