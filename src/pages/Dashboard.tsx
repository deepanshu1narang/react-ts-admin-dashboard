import { BsSearch } from "react-icons/bs";
import Main from "../components/Main";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userpic.png";
import WidgetItem from "./WidgetItem";
import CategoryItem from "./CatrgoryItem";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import Table from "../components/DashboardTable";

const Dashboard = () => {
  return (
    <Main className="dashboard">
      {/* searchbar */}
      <div className="searchBar">
        <BsSearch />
        <input type="text" placeholder="Search for data, usersm docs" />
        <FaRegBell />
        <img src={userImg} />
      </div>
      {/* searchbar */}

      {/* widgets */}
      <section className="widgetContainer">
        <WidgetItem percent={40} amount={true} value={34000} heading="Revenue" color="rgb(0, 115, 255)" />
        <WidgetItem percent={-15} value={400} heading="Users" color="rgb(0, 198, 202)" />
        <WidgetItem percent={80} value={23000} heading="Transactions" color="rgb(255, 196, 0)" />
        <WidgetItem percent={30} value={1000} heading="Products" color="rgb(76, 0, 255)" />
      </section>
      {/* widgets */}
      {/* graph and inventory data */}
      <section className="graph-container">
        <div className="revenue-chart">
          <h2>Revenue and Transaction</h2>
          {/* graph here */}
          <BarChart data_2={[300, 144, 433, 655, 237, 755, 190]} data_1={[200, 444, 343, 556, 778, 455, 990]} title_1="Revenue" title_2="Transaction" bgColor_1="rgb(0,115,255)" bgColor_2="rgba(53,162,235,0.8)" />
        </div>
        <div className="dashboard-categories">
          <h2>Inventory</h2>
          <div>
            {data.categories.map((e) => (
              <CategoryItem key={e.heading} heading={e.heading} value={e.value} color={`hsl(${e.value * 1.5}, ${e.value * 0.5}%, 50%)`} />
            ))}
          </div>
        </div>
      </section>

      <section className="transaction-container">
        <div className="gender-chart">
          <h2>Gender Ratio</h2>
          <DoughnutChart labels={["Female", "Male"]} data={[12, 19]} backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]} cutout={90} />
          <p>
            <BiMaleFemale />
          </p>
        </div>

        {/* Table */}
        <Table data={data.transaction} />
      </section>

      {/* graph and inventory data */}
    </Main>
  );
};

export default Dashboard;
