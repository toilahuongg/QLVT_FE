import { Create, NumberInput, SimpleForm, required, useCreate } from "react-admin";
import ProductListPicker from "./ProductListPicker";

export const ProductCreate = () => {
  const [create] = useCreate();
  const productSave = (data: any) => {
      create('products-branch', { data: { id: data.id, quantity: data.quantity, productId: data.product.id } });
  };

  return (
    <Create>
      <SimpleForm onSubmit={productSave}>
        <ProductListPicker />
        <NumberInput min={0} source="quantity" validate={required()} fullWidth />
      </SimpleForm>
    </Create>
  )
};


export default ProductCreate;