import { Edit, SaveButton, SimpleForm, TextInput, Toolbar, required } from "react-admin";

export const CustomerEdit = () => (
  <Edit>
    <SimpleForm toolbar={<Toolbar><SaveButton /></Toolbar>}>
      <TextInput source="name" validate={required()} fullWidth />
      <TextInput source="phone" validate={required()} fullWidth />
      <TextInput source="email" validate={required()} fullWidth />
      <TextInput source="address" validate={required()} fullWidth />
    </SimpleForm>
  </Edit>
);


export default CustomerEdit;