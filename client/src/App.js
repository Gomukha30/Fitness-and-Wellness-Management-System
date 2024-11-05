import React, { useState } from "react";
// import React, {Component} from "react";
import Carousel from "./components/carousel";
import Navbar from "./components/Navbar";
import Login from "./components/login";
import { Routes, Link, Switch, Navigate, Route } from "react-router-dom";
import LoginPage from "./components/login";
import Homepage from "./components/Homepage/homepage";
import Register from "./components/register";
import ForgetPassword from "./components/forgetpassword";
import Reset from "./components/reset";
import About from "./components/about";
import Trainer from "./components/trainer";
import HealthyLiving from "./components/healthyliving";
import Gallery from "./gallery";
import FitnessVideos from "./components/fitnessvideos";
import TrainerPage from "./components/trainerpage";
import Admin from "./components/admin";

function App() {
  return (
    <Routes>
      {/* <Route path="*" element={<Navigate replace to={"/"} />} /> */}
      <Route path="/" Component={Homepage} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/navbar" Component={Navbar} />
      <Route path="/carousel" Component={Carousel} />
      <Route path="/register" Component={Register} />
      <Route path="/forgetpassword" Component={ForgetPassword} />
      <Route path="/reset" Component={Reset} />
      <Route path="/about" Component={About} />
      <Route path="/Trainer" Component={Trainer} />
      <Route path="/healthyliving" Component={HealthyLiving} />
      <Route path="/gallery" Component={Gallery} />
      <Route path="/fitnessvideos" Component={FitnessVideos} />
      <Route path="/trainerpage" Component={TrainerPage} />
      <Route path="/admin" Component={Admin} />
    </Routes>
  );
}

export default App;
