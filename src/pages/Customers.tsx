import { ReactElement, useCallback, useState } from "react";
import Main from "../components/Main";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { customers } from "../assets/costumers";

// interface CustomerDataType extends Omit<DataType, "photo"> {
//   avatar: ReactElement;
// }

interface CustomerDataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: Column<CustomerDataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const Costumers = () => {
  const [data] = useState<CustomerDataType[]>(customers);

  const Table = useCallback(TableHOC<CustomerDataType>(columns, data, "dashboard-product-box", "Costumers", true), []);
  return (
    <Main>
      <>{Table()}</>
    </Main>
  );
};

export default Costumers;
export type { CustomerDataType };
