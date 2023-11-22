import { Create, SimpleForm, TextInput, required } from "react-admin";

export const CustomerCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={required()} fullWidth />
      <TextInput source="phone" validate={required()} fullWidth />
      <TextInput source="email" validate={required()} fullWidth />
      <TextInput source="address" validate={required()} fullWidth />
    </SimpleForm>
  </Create>
);


export default CustomerCreate;