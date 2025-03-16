//
import { createContext } from "react";
import "./App.css";
// import { Routes, Route } from "react-router-dom";
import Home from "./auth/Home";
import Login from "./auth/login";
import Register from "./auth/register";
import Settings from "./auth/Settings";
import FixedDepositPage from "./components/FixedDepositPage";
import Contact from "./components/Contact";
//import AuthenticationLayout from "./auth/AuthenticationLayout";
// import BaseLayout from "./auth/BaseLayout";
import AuthenticationRoutes from "./auth/Route-guards/AuthenticationRoutes";
import { Route, Routes } from "react-router-dom";
import NotAuthenticationRoutes from "./auth/Route-guards/NotAuthenticationRoutes";
export const UserContext = createContext();
function App() {
  const data = "Hello World";
  return (
    <>
      <UserContext.Provider value={data}>
        {/* <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />                                                   */}
        <Routes>
          <Route Component={AuthenticationRoutes}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/purchase" element={<Purchase />} />
            
            <Route path="/review" element={<Review/>} />           */}
          </Route>
          <Route path="/Home" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/fixedDepositpage" element={<FixedDepositPage />} />
          <Route path="/Contact" element={<Contact />} />

          <Route Component={NotAuthenticationRoutes}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
}
export default App;
