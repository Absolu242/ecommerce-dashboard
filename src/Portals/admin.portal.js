import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import addCustomer from "../pages/Customers/addCustomer";
import CustomerInfo from "../pages/Customers/CustomerInfo";
import CustomersList from "../pages/Customers/CustomersList";

function AdminPortal() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/customers/addcustomer" component={addCustomer} />
      <Route path="/customers/:id" component={CustomerInfo} />
      <Route path="/customers" component={CustomersList} />
    </Switch>
  );
}

export default AdminPortal;
