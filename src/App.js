import React from "react";
import "./App.css";
import Home from "./pages/Home";
import NavBarP from "./container/NavBarP";
import { Route, Routes } from "react-router-dom";
import FindDonor from "./pages/FindDonor";
import Profile from "./pages/Profile";
import RegisterDonorForm from './pages/RegisterDonorForm';

function App() {
  return (
    <>
      <NavBarP />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/find-donor' element={<FindDonor />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<RegisterDonorForm />} />
      </Routes>
    </>
  );
}

export default App;
