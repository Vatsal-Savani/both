import "./App.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Charts from "./pages/employees/Charts";
import AuthModule from "./modules/AuthModule";
import Login from "./pages/Login";
import New from "./pages/New";
import Register from "./pages/Register";
import DashBoard from "./components/DashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/login"} />
  },
  {
    path: "/admin",
    element: <AuthModule><Charts /></AuthModule>
  },
  {
    path: "/employees",
    element: <AuthModule><New /></AuthModule>
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />
  },
  {
    path: "*",
    element: <h1 style={{ display: "flex", justifyContent: "center" }}>This Page Is Not Exist</h1>
  }
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
