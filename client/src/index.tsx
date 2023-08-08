import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Provider } from 'react-redux';

import './index.css';

import Home from './pages/index';
import WhyPage from './pages/why';
import SellPage from './pages/sell';
import BlogPage from './pages/blog';
import DetailsPage from './pages/details';
import reportWebVitals from './reportWebVitals';
import SubCategoryPage from './pages/sub_category/index';

import store from './redux/store';
import AnimalsPage from './pages/animals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/why",
    element: <WhyPage />,
  },
  {
    path: "/sell",
    element: <SellPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/animals",
    element: <AnimalsPage />,
  },
  {
    path: "/:main_category/:sub_category/:id",
    element: <DetailsPage />,
  },
  {
    path: "/:main_category/:sub_category",
    element: <SubCategoryPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
