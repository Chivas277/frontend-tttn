
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
  }
]);

function App() {
  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
