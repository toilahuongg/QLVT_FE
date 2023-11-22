import { BooleanInput, DateInput, Edit, SelectInput, SimpleForm, TextInput, required } from "react-admin";

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" fullWidth />
      <TextInput source="name" validate={required()} fullWidth />
      <TextInput source="phone" fullWidth />
      <TextInput source="address" fullWidth />
      <DateInput label="Born date" source="bornDate" fullWidth />
      <SelectInput source="role" choices={[
        { id: 'USER', name: 'User' },
        { id: 'ADMIN', name: 'Manager' },
      ]} />
      <BooleanInput label="Active" source="status" fullWidth />
    </SimpleForm>
  </Edit>
);


export default UserEdit;