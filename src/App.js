import TopBar from "./Components/1TopBar/TopBar";
import Hero from "./Components/2Hero/Hero";
import Profile from "./Components/3Profile/Profile";
import Works from "./Components/4Works/Works";
import Testimonials from "./Components/5Testimonials/Testimonials";
import Contact from "./Components/6Contact/Contact";
import Footer from "./Components/7Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <TopBar />
      <div className="sections">
        <Hero />
        <Profile />
        <Works />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
