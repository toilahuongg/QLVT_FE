import { Datagrid, List, NumberField, TextField } from "react-admin";

const ProductList = () => {

  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" label="ID" />
        <TextField source="product.name" label="Tên vật tư" />
        <TextField source="product.quantity" label="Số lượng" />
        <NumberField
          source="product.price"
          label="Giá"
          options={{
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 2
          }} />
      </Datagrid>
    </List>
  )
}


export default ProductList;