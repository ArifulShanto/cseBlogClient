import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
  Routes,
} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './pages/homepage/HomePage';
import Register from './pages/register/Register';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import TopBar from './components/topBar/TopBar';
import { useContext } from "react";
import { Context } from "./context/Context";
import Login from "./pages/login/Login";
import RequireAuth from "./pages/login/RequireAuth";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";

function App() {


  return (
    <div>
      <TopBar></TopBar>
      <Routes>
        <Route path="/" element={<RequireAuth><HomePage /></RequireAuth>}></Route>
        <Route path="/write" element={<RequireAuth><Write /></RequireAuth>}></Route>
        <Route path="/settings" element={<RequireAuth><Settings /></RequireAuth>}></Route>
        <Route path="/post/:postId" element={<RequireAuth><Single /></RequireAuth>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
