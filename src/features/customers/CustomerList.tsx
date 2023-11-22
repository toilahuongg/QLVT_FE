import { Datagrid, List, TextField } from "react-admin";

const CustomerList = () => {

  return (
    <List>
      <Datagrid rowClick="edit" bulkActionButtons={<></>}>
        <TextField source="id" label="ID" />
        <TextField source="name" label="Họ và tên" />
        <TextField source="phone" label="SĐT" />
        <TextField source="email" label="Email" />
      </Datagrid>
    </List>
  )
}


export default CustomerList;