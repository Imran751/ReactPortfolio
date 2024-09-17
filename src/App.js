import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from "./Components/1TopBar/TopBar";
import Hero from "./Components/2Hero/Hero";
import Profile from "./Components/3Profile/Profile";
import Works from "./Components/4Works/Works";
import Testimonials from "./Components/5Testimonials/Testimonials";
import Contact from "./Components/6Contact/Contact";
import Footer from "./Components/7Footer/Footer";
// import FeaturePage from "./ServicesPages/FeaturePage/FeaturePage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <TopBar />
        <div className="sections">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Profile />
                  <Works />
                  <Testimonials />
                  <Contact />
                  <Footer />
                </>
              }
            />
            {/* <Route path="/features" element={<FeaturePage />} />  */}
          </Routes>
          
        </div>
      </div>
    </Router>
  );
};

export default App;
