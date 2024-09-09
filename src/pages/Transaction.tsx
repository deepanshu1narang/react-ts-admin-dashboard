import { ReactElement, useCallback, useState } from "react";
import Main from "../components/Main";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { transactions } from "../assets/transactions";

interface TransactionDataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<TransactionDataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const Transaction = () => {
  const [data] = useState<TransactionDataType[]>(transactions);

  const Table = useCallback(TableHOC<TransactionDataType>(columns, data, "dashboard-product-box", "Transactions", true), []);
  return <Main>{Table()}</Main>;
};

export default Transaction;
export type { TransactionDataType };
