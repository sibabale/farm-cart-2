import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Provider } from 'react-redux';

import './index.css';

import Home from './pages/index';
import LoginPage from './pages/auth/login';
import DetailsPage from './pages/details';
import ListingSteps from './pages/listing/steps/steps';
import reportWebVitals from './reportWebVitals';
import SubCategoryPage from './pages/sub_category/index';
import MainCategoryPage from './pages/main_category/index';
import RegistrationPage from './pages/auth/register';

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
    path: "/listing",
    element: <ListingSteps />,
  },
  {
    path: "/:main_category",
    element: <MainCategoryPage />,
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "/auth/register",
    element: <RegistrationPage />,
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
