import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Cards from './Cards';
import ProductDetails from './ProductDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:"/",
        element: <Home></Home>,
        loader: ()=> fetch('../category.json'),
        children:[
          {
            path:"/",
            element:<Cards></Cards>,
            loader: ()=> fetch('../gadgets.json'),
          },
          {
            path:"/category/:category",
            element:<Cards></Cards>,
            loader: ()=> fetch('../gadgets.json'),
          },
        ]
      },
      {
        path: "/details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ()=> fetch('../gadgets.json'),
      }
    ]
  },
  {
    path: "statistics"
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
