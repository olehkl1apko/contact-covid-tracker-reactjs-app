import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./components";
import ErrorPage from "./pages/ErrorPage";
import ContactsPage from "./pages/ContactsPage";
import DashboardPage from "./pages/DashboardPage";
import MapPage from "./pages/MapPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "map", element: <MapPage /> },
      { path: "contacts", element: <ContactsPage /> },
    ],
  },
]);

export default router;
