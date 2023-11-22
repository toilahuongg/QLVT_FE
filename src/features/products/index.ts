import ProductCreate from "./CreateForm";
import ProductEdit from "./EditForm";
import ProductList from "./ProductList";
import { ResourceProps } from "react-admin";
import { LocalGroceryStore } from "@mui/icons-material";

const resourceProducts: ResourceProps = {
  name: 'products-branch',
  icon: LocalGroceryStore,
  options: { label: 'Sản phẩm' },
  list: ProductList,
  create: ProductCreate,
  edit: ProductEdit,
  recordRepresentation: (record: any) =>
    `${record.product.name}`,
};

export default resourceProducts;