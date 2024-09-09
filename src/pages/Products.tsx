import { ReactElement, useCallback, useState } from "react";
import Main from "../components/Main";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { products } from "../assets/products";
import { FaPlus } from "react-icons/fa";

interface DataType {
  // id: number;
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const Products = () => {
  const [data] = useState<DataType[]>(products);

  const Table = useCallback(TableHOC<DataType>(columns, data, "dashboard-product-box", "Products", true), []);

  return (
    <Main>
      <>{Table()}</>
      <Link className="add-new" to={`/admin/products/new`}>
        <FaPlus />
      </Link>
    </Main>
  );
};

export default Products;
export type { DataType };
