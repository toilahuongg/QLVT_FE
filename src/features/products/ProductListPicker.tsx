import React from "react";
import { ReferenceInput, SelectInput } from "react-admin";

type ProductListPickerProps = {
  disabled?: boolean
}
const ProductListPicker: React.FC<ProductListPickerProps> = ({ disabled = false }) => {
  return (
    <ReferenceInput source="product.id" reference="products/remaining" disabled={disabled} fullWidth>
      <SelectInput label="Product" optionText="name" optionValue="id" fullWidth/>
    </ReferenceInput>
  )
}

export default ProductListPicker;