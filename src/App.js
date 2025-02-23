import React from 'react';
import './App.css';
import Home from "./home/home";
import Sidebar from "./sidebar/sidebar";
import About from "./about/about";
import Resume from "./resume/resume";
import Portfolio from "./portfolio/portfolio";
import Services from "../src/Services/services"; 
import Testimonials from "./testimonials/testimonials"; 
import Pricing from "./pricing/pricing";
import Blog from "./blog/blog";
import Footer from "../src/Footer/footer";
 
const App = () => {
  return (
    <div className="App">
        <Sidebar />
      <main className='main'>
          <Home  />
          <About />
          <Resume />
          <Portfolio />
          <Services />
          <Pricing />
          <Blog />
          <Testimonials />
      </main>
        <Footer />
    </div>
  
  );
}
export default App;
