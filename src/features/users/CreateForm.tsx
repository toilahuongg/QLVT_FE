import { BooleanInput, Create, DateInput, SelectInput, SimpleForm, TextInput, required } from "react-admin";

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={required()} fullWidth />
      <TextInput source="username" validate={required()} fullWidth />
      <TextInput source="password" type="password" validate={required()} fullWidth />
      <TextInput source="phone" fullWidth />
      <TextInput source="address" fullWidth />
      <DateInput label="Born date" source="bornDate" fullWidth />
      <SelectInput source="role" defaultValue="USER" choices={[
        { id: 'USER', name: 'User' },
        { id: 'ADMIN', name: 'Manager' },
      ]} />
      <BooleanInput label="Active" source="active" fullWidth />
    </SimpleForm>
  </Create>
);


export default UserCreate;