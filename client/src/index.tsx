import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import './index.css';

import Home from './pages/index';
import Animals from './pages/animals/index';
import FeedPage from './pages/feed';
import Listing from './pages/listing/intro';
import Category from './pages/category/index';
import SeedsPage from './pages/seeds';
import ToolsPage from './pages/tools';
import HealthPage from './pages/health';
import DetailsPage from './pages/details';
import MachineryPage from './pages/machinery';
import ListingSteps from './pages/listing/steps/steps';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/feed",
    element: <FeedPage />,
  },
  {
    path: "/:id",
    element: <DetailsPage />,
  },
  {
    path: "/tools",
    element: <ToolsPage />,
  },
  {
    path: "/seeds",
    element: <SeedsPage />,
  },
  {
    path: "/listing",
    element: <Listing />,
  },
  {
    path: "/listing/:id",
    element: <ListingSteps />,
  },
  {
    path: "/health",
    element: <HealthPage />,
  },
  {
    path: "/machinery",
    element: <MachineryPage />,
  },
  {
    path: "/animals",
    element: <Animals />,
  },
  {
    path: "/feed/:id",
    element: <Category />,
  },
  {
    path: "/tools/:id",
    element: <Category />,
  },
  {
    path: "/seeds/:id",
    element: <Category />,
  },
  {
    path: "/health/:id",
    element: <Category />,
  },
  {
    path: "/machinery/:id",
    element: <Category />,
  },
  {
    path: "/animals/:id",
    element: <Category />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
