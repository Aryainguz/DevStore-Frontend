import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";
import Loading from "./pages/Loading";
import Error from "./pages/Error";
import "./index.css";

const Admin = lazy(() => import("./pages/admin/Admin"));
const Customer = lazy(() => import("./pages/admin/Customer"));
const AllProducts = lazy(() => import("./pages/admin/AllProducts"));
const Transaction = lazy(() => import("./pages/admin/Transaction"));
const AddProduct = lazy(() => import("./pages/admin/AddProduct"));
const ProductManage = lazy(() => import("./pages/admin/ProductManage"));
const TransactionDetails = lazy(
  () => import("./pages/admin/TransactionDetails")
);
const BarChart = lazy(() => import("./pages/admin/BarChart"));
const PieChart = lazy(() => import("./pages/admin/PieChart"));
const LineChart = lazy(() => import("./pages/admin/LineChart"));
const Coupan = lazy(() => import("./pages/admin/Coupan"));
const Home = lazy(() => import("./pages/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const Cart = lazy(() => import("./pages/Cart"));
const Footer = lazy(() => import("./components/Footer"));
const Contact = lazy(() => import("./pages/Contact"));
const Products = lazy(()=>import("./pages/Hoodies"))

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loading />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tshirts" element={<Products />} />
            <Route path="/hoodies" element={<Products />} />
            <Route path="/stickers" element={<Products />} />
            <Route path="/Cart" element={<Cart />} />

            {/* {Admin Routes }  */}
            <Route path="/devstore/admin" element={<Admin />} />
            <Route path="/devstore/admin/products" element={<AllProducts />} />
            <Route path="/devstore/admin/addproduct" element={<AddProduct />} />
            <Route path="/devstore/admin/customers" element={<Customer />} />
            <Route path="/devstore/admin/coupans" element={<Coupan />} />
            <Route
              path="/devstore/admin/product/:params"
              element={<ProductManage />}
            />
            <Route
              path="/devstore/admin/transaction/:params"
              element={<TransactionDetails />}
            />
            <Route
              path="/devstore/admin/transactions"
              element={<Transaction />}
            />
            <Route path="/devstore/admin/charts/bar" element={<BarChart />} />
            <Route path="/devstore/admin/charts/pie" element={<PieChart />} />
            <Route path="/devstore/admin/charts/line" element={<LineChart />} />
            <Route path="/contact" element={<Contact />} />

            {/* Error Route  */}
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
