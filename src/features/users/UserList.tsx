import { BooleanField, Datagrid, DateField, List, TextField } from "react-admin";

const UserList = () => {

  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" label="ID" />
        <TextField source="name" label="Họ và tên" />
        <TextField source="username" label="Username" />
        <DateField source="bornDate" label="Ngày sinh" />
        <BooleanField source="status" label="Trạng thái" />
      </Datagrid>
    </List>
  )
}


export default UserList;