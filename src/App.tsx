import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Costumers = lazy(() => import("./pages/Customers"));
const BarCharts = lazy(() => import("./pages/Charts/BarChart"));
const PieCharts = lazy(() => import("./pages/Charts/PieCharts"));
const LineCharts = lazy(() => import("./pages/Charts/LineCharts"));
const Coupon = lazy(() => import("./pages/Apps/Coupon"));
// const StopWatch = lazy(() => import("./pages/Apps/StopWatch"));
const Toss = lazy(() => import("./pages/Apps/Toss"));
const DisplayTime = lazy(() => import("./pages/Apps/DisplayTime"));
const NewProduct = lazy(() => import("./pages/Management/NewProduct"));
const ProductManagement = lazy(() => import("./pages/Management/ProductManagement"));
const TransactionManagement = lazy(() => import("./pages/Management/TransactionManagement"));

import "./styles/app.scss";
import Loader from "./shared/Loader";
import AdminSideBar from "./pages/AdminSideBar";
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.pathname === "") {
      navigate("/admin/dashboard");
    }
  }, []);

  return (
    <div className="adminContainer">
      <div className="time">
        <DisplayTime />
      </div>
      <AdminSideBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/transaction" element={<Transaction />} />
          <Route path="/admin/customers" element={<Costumers />} />

          {/* Charts */}
          <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />
          <Route path="/admin/chart/line" element={<LineCharts />} />

          {/* Apps */}
          {/* <Route path="/admin/app/stopwatch" element={<StopWatch />} /> */}
          <Route path="/admin/app/coupon" element={<Coupon />} />
          <Route path="/admin/app/toss" element={<Toss />} />

          {/* Management */}
          {/* if we keep :id then new it'll consider new as id... so  make sure to keep new before :id route */}
          <Route path="/admin/products/new" element={<NewProduct />} />
          <Route path="/admin/products/:id" element={<ProductManagement />} />
          <Route path="/admin/transaction/:id" element={<TransactionManagement />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
