import { RiDashboardFill, RiShoppingBag3Fill, RiCoupon3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad } from "react-icons/fa";
// import { FaStopwatch } from "react-icons/fa";
import AsideDiv from "../components/AsideDiv";
import { useLocation } from "react-router-dom";
import { LiProps } from "../components/Li";
import { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";

interface Nav extends LiProps {
  id: string;
}

const AdminSideBar = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(window.innerWidth < 1100);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  const navsDashboard: Nav[] = [
    {
      id: "dashboard",
      url: "/admin/dashboard",
      Icon: RiDashboardFill,
      text: "Dashboard",
      location: location,
    },
    {
      id: "products",
      url: "/admin/products",
      Icon: RiShoppingBag3Fill,
      text: "Products",
      location: location,
    },
    {
      id: "customers",
      url: "/admin/customers",
      Icon: IoIosPeople,
      text: "Customers",
      location: location,
    },
    {
      id: "transaction",
      url: "/admin/transaction",
      Icon: AiFillFileText,
      text: "Transaction",
      location: location,
    },
  ];

  const navsCharts: Nav[] = [
    {
      id: "bar",
      url: "/admin/chart/bar",
      Icon: FaChartBar,
      text: "Bar",
      location: location,
    },
    {
      id: "pie",
      url: "/admin/chart/pie",
      Icon: FaChartPie,
      text: "Pie",
      location: location,
    },
    {
      id: "line",
      url: "/admin/chart/line",
      Icon: FaChartLine,
      text: "Line",
      location: location,
    },
  ];

  const navsApps: Nav[] = [
    // {
    //   id: "stopwatch",
    //   url: "/admin/app/stopwatch",
    //   Icon: FaStopwatch,
    //   text: "Stopwatch",
    //   location: location,
    // },
    {
      id: "coupon",
      url: "/admin/app/coupon",
      Icon: RiCoupon3Fill,
      text: "Coupon",
      location: location,
    },
    {
      id: "toss",
      url: "/admin/app/toss",
      Icon: FaGamepad,
      text: "Toss",
      location: location,
    },
  ];

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}
      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h2>Logo</h2>
        {/* divOne */}
        <AsideDiv nav={navsDashboard} h5="Dashboard" location={location} setShowModal={setShowModal} />
        {/* divTwo */}
        <AsideDiv nav={navsCharts} h5="Charts" location={location} setShowModal={setShowModal} />
        {/* divThree */}
        <AsideDiv nav={navsApps} h5="Apps" location={location} phoneActive={phoneActive} setShowModal={setShowModal} />
      </aside>
    </>
  );
};

export default AdminSideBar;
export type { Nav };
