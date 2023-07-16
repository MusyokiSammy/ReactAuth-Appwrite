import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import HomeLayouts from "./Layouts/HomeLayouts";

import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./utils/AuthContext";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<HomeLayouts/>}>
          <Route element={<PrivateRoutes/>}>
            <Route index element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Route>
    )
  )
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App;
