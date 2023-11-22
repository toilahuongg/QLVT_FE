import CustomerCreate from "./CreateForm";
import CustomerEdit from "./EditForm";
import CustomerList from "./CustomerList";
import { ResourceProps } from "react-admin";
import { People } from "@mui/icons-material";

const resourceCustomer: ResourceProps = {
  name: 'customers',
  icon: People,
  options: { label: 'Khách hàng' },
  list: CustomerList,
  create: CustomerCreate,
  edit: CustomerEdit,
  recordRepresentation: (record: any) =>
    `${record.name}`,
};

export default resourceCustomer;