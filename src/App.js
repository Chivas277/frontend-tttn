
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Product from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import ProductDetail from "./pages/Product";
import AddCate from "./pages/AddCategories";
import AddSupplier from "./pages/AddSupplier";
import ProductScreen from "./pages/ScreenProduct";
import EditProduct from "./pages/EditProduct"
import Cart from "./pages/Cart";
import CateScreen from "./pages/ScreenCategories";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SupScreen from "./pages/ScreenSupplier";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Product/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/productlist",
    element: <Product/>,
  },
  {
    path: "/addproducts",
    element: <AddProduct/>,
  },
  {
    path: "/productdetail/:id",
    element: <ProductDetail/>,
  },
  {
    path: "/product/:categories",
    element: <ProductDetail/>,
  },
  {
    path:"/addcate",
    element: <AddCate/>,
  },
  {
    path: "/addsup",
    element: <AddSupplier/>,
  },
  {
    path:"/productscreen",
    element:<ProductScreen/>
  },
  {
    path:"/editproduct/:id",
    element:<EditProduct/>
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"/catescreen",
    element:<CateScreen/>
  },
  {
    path:"/supscreen",
    element:<SupScreen/>
  }
]);

function App() {
  return (
    <div >
      <ToastContainer position="bottom-center" limit={1} />
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
