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
import ErrorPage from './ErrorPage';
import Dashboard from './Dashboard';
import Statistics from './Statistics';
import Support from './Support';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/category.json'),
        children: [
          {
            path: "/",
            element: <Cards></Cards>,
            loader: () => fetch('/gadgets.json'),
          },
          {
            path: "category/:category",
            element: <Cards></Cards>,
            loader: () => fetch('/gadgets.json'),
          }
        ],

      },
      {
        path: "/details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/gadgets.json'),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch('/gadgets.json')
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/support",
        element:<Support></Support>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
