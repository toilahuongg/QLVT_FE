import { Edit, NumberInput, SimpleForm, TextInput, required, useUpdate } from "react-admin";

export const ProductEdit = () => {
  const [update] = useUpdate();
  const productSave = (data: any) => {
    update('products-branch', { id: data.id, data: { id: data.id, quantity: data.quantity, productId: data.product.id } });
  };

  return (
    <Edit>
      <SimpleForm onSubmit={productSave}>
        <TextInput label="Product" source="product.name" disabled fullWidth/>
        <NumberInput min={0} source="quantity" validate={required()} fullWidth />
      </SimpleForm>
    </Edit>
  )
};


export default ProductEdit;