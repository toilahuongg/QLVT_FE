import {
  Admin,
  Resource
} from "react-admin";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";
import resourceCustomer from "./features/customers";
import resourceUser from "./features/users";
import resourceProducts from "./features/products";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} requireAuth>
    <Resource {...resourceUser} />
    <Resource {...resourceCustomer} />
    <Resource {...resourceProducts} />
  </Admin>
);
