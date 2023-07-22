import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Provider } from 'react-redux';

import './index.css';

import Home from './pages/index';
import DetailsPage from './pages/details';
import reportWebVitals from './reportWebVitals';
import SubCategoryPage from './pages/sub_category/index';

import store from './redux/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
