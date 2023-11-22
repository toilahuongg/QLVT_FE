import { ResourceProps } from "react-admin";
import UserCreate from "./CreateForm";
import UserEdit from "./EditForm";
import UserList from "./UserList";
import { Person } from "@mui/icons-material";

const resourceUser: ResourceProps = {
  name: 'users',
  icon: Person,
  options: { label: 'Tài khoản ' },
  list: UserList,
  create: UserCreate,
  edit: UserEdit,
  recordRepresentation: (record: any) =>
    `${record.name}`,
};

export default resourceUser;