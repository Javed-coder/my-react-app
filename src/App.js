import React from 'react';
import About from './about/about';
import Home from './home/home';
import Sidebar from './sidebar/sidebar';
//import Navbar from './home/';
import Portfolio from './portfolio/portfolio';
import Resume from './resume/resume';
import Footer from './Footer/footer';
import Testimonial from './testimonials/testimonials';
import Services from './Services/services';
import "./index.css";
import "./App.css";
const App = () => {
    return (
        <section>
        <div className="sidebar">
            <Sidebar />
        </div>    
        <Home />
        <About />
        <Portfolio />
        <Resume />  
       
        <Services />
            <Testimonial />
        <Footer />
        </section>
        
    );
}
export default App;